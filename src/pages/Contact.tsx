import { useState } from "react";

// Formspree form IDs are meant to be embedded client-side (not secret)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyeyqzly";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // 1. stop the browser's default full-page form submission
    e.preventDefault();

    // 2. grab the form element now - e.currentTarget is nulled out by the
    //    browser once the synchronous event phase ends, so it won't survive
    //    the await below
    const form = e.currentTarget;

    // 3. show the sending state and clear any previous error
    setSending(true);
    setError(null);

    try {
      // 4. send the form fields to Formspree, asking for a JSON response
      //    so we can handle success/failure without leaving the page
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      // 5. surface an error if Formspree rejected the submission
      if (!res.ok) {
        throw new Error("Message failed to send. Please try again.");
      }

      // 6. clear the form and show a success message
      form.reset();
      setSent(true);
    } catch (err) {
      // 7. fall back to a readable error message if anything above throws
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      // 8. always turn off the sending state, whether it succeeded or failed
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0a1420] text-[#eef2f6] px-4 sm:px-8 py-12 sm:py-16">
      <div className="max-w-xl mx-auto">
        <p className="text-[#3d6ea5] text-xs uppercase mb-2">Get in touch</p>
        <h1 className="text-3xl font-bold mb-1">Let's work together</h1>
        <p className="text-[#8a97a5] text-sm mb-8">
          Have a question or want to collaborate? Send me a message.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-xs text-[#8a97a5] mb-1">Name</label>
            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full bg-[#0f1c2c] border border-[#1c2d3f] rounded p-3 text-sm text-[#eef2f6] outline-none focus:border-[#3d6ea5]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xs text-[#8a97a5] mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="w-full bg-[#0f1c2c] border border-[#1c2d3f] rounded p-3 text-sm text-[#eef2f6] outline-none focus:border-[#3d6ea5]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xs text-[#8a97a5] mb-1">Subject</label>
            <input
              name="subject"
              required
              placeholder="What's this about?"
              className="w-full bg-[#0f1c2c] border border-[#1c2d3f] rounded p-3 text-sm text-[#eef2f6] outline-none focus:border-[#3d6ea5]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xs text-[#8a97a5] mb-1">Message</label>
            <textarea
              name="message"
              required
              placeholder="Write your message..."
              className="w-full min-h-24 bg-[#0f1c2c] border border-[#1c2d3f] rounded p-3 text-sm text-[#eef2f6] outline-none focus:border-[#3d6ea5]"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="bg-[#3d6ea5] text-white rounded px-6 py-3 text-sm font-bold hover:bg-[#4a7db4] disabled:opacity-70"
          >
            {sending ? "Sending..." : "Send message"}
          </button>

          {error && <p className="text-red-400 text-sm mt-3">{error}</p>}

          {sent && (
            <p className="text-[#3d6ea5] text-sm mt-3">
              Message sent - I'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
