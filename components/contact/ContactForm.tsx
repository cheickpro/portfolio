"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    // Nous connecterons cette partie à une API plus tard.

    await new Promise((resolve) => setTimeout(resolve, 1200));

    console.log(form);

    setLoading(false);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border p-8 shadow-sm"
    >
      <h2 className="mb-6 text-3xl font-bold">
        Send a Message
      </h2>

      <div className="space-y-6">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          rows={6}
          name="message"
          placeholder="Write your message..."
          value={form.message}
          onChange={handleChange}
          required
          className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
        >
          <Send size={18} />

          {loading ? "Sending..." : "Send Message"}
        </button>

      </div>
    </form>
  );
}