"use client";

import { FormEvent, useState } from "react";

import { submitToFirebase } from "@/lib/form-submissions";

type MeetingState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

const initialState: MeetingState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  preferredDate: "",
  preferredTime: "",
  message: ""
};

export function MeetingForm() {
  const [form, setForm] = useState<MeetingState>(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.email || !form.phone || !form.preferredDate || !form.preferredTime) {
      setError("Please fill in the required details before submitting your meeting request.");
      return;
    }

    const normalizedPhone = form.phone.trim();
    if (normalizedPhone.length < 8) {
      setError("Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    try {
      await submitToFirebase("meeting_requests", {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: normalizedPhone,
        company: form.company.trim(),
        preferredDate: form.preferredDate,
        preferredTime: form.preferredTime,
        message: form.message.trim(),
        source: "book-meeting-page",
        status: "new-meeting-request",
        schedulingEmail: "crazycoderztechnologies@gmail.com",
        submittedAt: new Date().toISOString()
      });

      setSuccess("Your meeting request was submitted to Firebase successfully. We’ll contact you shortly.");
      setForm(initialState);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We couldn't submit your request right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="formCard" onSubmit={handleSubmit}>
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
        <label>
          Company
          <input
            value={form.company}
            onChange={(event) => setForm({ ...form, company: event.target.value })}
            placeholder="Company name"
          />
        </label>
        <label>
          Preferred Date
          <input
            type="date"
            value={form.preferredDate}
            onChange={(event) => setForm({ ...form, preferredDate: event.target.value })}
            required
          />
        </label>
        <label>
          Preferred Time
          <input
            type="time"
            value={form.preferredTime}
            onChange={(event) => setForm({ ...form, preferredTime: event.target.value })}
            required
          />
        </label>
        <label className="fullWidth">
          Project Details
          <textarea
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            placeholder="Share what you'd like to discuss in the meeting"
            rows={5}
          />
        </label>
      </div>
      <button className="button buttonPrimary" type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Request Meeting"}
      </button>
      {error ? <p className="formMessage error">{error}</p> : null}
      {success ? <p className="formMessage success">{success}</p> : null}
    </form>
  );
}
