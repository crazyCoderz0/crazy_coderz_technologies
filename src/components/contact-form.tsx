"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

import { submitToFirebase } from "@/lib/form-submissions";

type ContactState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: ContactState = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

export function ContactForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<ContactState>(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const intent = searchParams.get("intent") || "general-inquiry";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.email || !form.phone || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }

    const normalizedPhone = form.phone.trim();
    if (normalizedPhone.length < 8) {
      setError("Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    try {
      await submitToFirebase("inquiries", {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: normalizedPhone,
        message: form.message.trim(),
        intent,
        source: "contact-page",
        status: "new-lead",
        submittedAt: new Date().toISOString()
      });

      setSuccess("Thanks! Your inquiry has been submitted to Firebase successfully.");
      setForm(initialState);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong while sending your inquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form id="inquiry-form" className="formCard" onSubmit={handleSubmit}>
      <div className="fieldGrid">
        <label>
          Name
          <input
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder="Your name"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            placeholder="you@example.com"
            required
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            placeholder="+91 98765 43210"
            required
          />
        </label>
        <label className="fullWidth">
          Message
          <textarea
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            placeholder="Tell us about your project, goals, and timeline"
            rows={6}
            required
          />
        </label>
      </div>
      <button className="button buttonPrimary" type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send Inquiry"}
      </button>
      <p className="muted">Lead type: {intent.replace(/-/g, " ")}</p>
      {error ? <p className="formMessage error">{error}</p> : null}
      {success ? <p className="formMessage success">{success}</p> : null}
    </form>
  );
}
