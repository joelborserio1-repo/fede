"use client";

import { useState } from "react";

export function NewsletterForm({
  interest = "newsletter",
}: {
  interest?: "newsletter" | "enquiry";
}) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, interest }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <p className="text-[15px] text-stone">
        You&apos;re on the list. We&apos;ll be in touch with pop-up dates and new
        pieces.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        aria-label="Email address"
        className="w-full border border-line bg-cream px-4 py-[14px] text-sm text-ink outline-none placeholder:text-stone focus:border-ink"
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="btn btn-fill shrink-0 disabled:opacity-60"
      >
        {state === "loading" ? "Joining" : "Join"}
      </button>
      {state === "error" ? (
        <p className="text-sm text-gold sm:hidden">
          Something went wrong. Please try again.
        </p>
      ) : null}
    </form>
  );
}
