import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  business?: unknown;
  budget?: unknown;
  message?: unknown;
  website?: unknown;
};

const MAX_LENGTHS = {
  name: 80,
  email: 120,
  business: 120,
  budget: 80,
  message: 2000,
};

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate(payload: ContactPayload) {
  const name = normalize(payload.name);
  const email = normalize(payload.email).toLowerCase();
  const business = normalize(payload.business);
  const budget = normalize(payload.budget);
  const message = normalize(payload.message);
  const website = normalize(payload.website);

  if (website) {
    return { ok: false as const, error: "Unable to send request." };
  }

  if (!name || name.length > MAX_LENGTHS.name) {
    return { ok: false as const, error: "Please enter a valid name." };
  }

  if (!email || email.length > MAX_LENGTHS.email || !isValidEmail(email)) {
    return { ok: false as const, error: "Please enter a valid email address." };
  }

  if (!business || business.length > MAX_LENGTHS.business) {
    return { ok: false as const, error: "Please enter a valid business type." };
  }

  if (!budget || budget.length > MAX_LENGTHS.budget) {
    return { ok: false as const, error: "Please choose a budget." };
  }

  if (!message || message.length > MAX_LENGTHS.message) {
    return { ok: false as const, error: "Please enter a valid message." };
  }

  return {
    ok: true as const,
    data: {
      name,
      email,
      business,
      budget,
      message,
    },
  };
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const result = validate(payload);

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const { name, email, business, budget, message } = result.data;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Business Type: ${business}`,
    `Budget: ${budget}`,
    "Message:",
    message,
  ].join("\n");

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: "New Project Request — Flaxy WebDev",
      text,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Request could not be sent. Please try again." },
      { status: 502 },
    );
  }
}
