import { useState } from "react";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSend() {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 900);
  }

  return (
    <div className="min-h-screen bg-white text-black px-8 py-16">
      <div className="max-w-xl mx-auto">
        <p className="text-gray-500 text-xs uppercase mb-2">Get in touch</p>
        <h1 className="text-3xl font-bold mb-1">Let's work together</h1>
        <p className="text-gray-600 text-sm mb-8">
          Have a question or want to collaborate? Send me a message.
        </p>

        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">Name</label>
          <input
            placeholder="Your name"
            className="w-full border border-gray-300 rounded p-3 text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">Email</label>
          <input
            placeholder="your@email.com"
            className="w-full border border-gray-300 rounded p-3 text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">Subject</label>
          <input
            placeholder="What's this about?"
            className="w-full border border-gray-300 rounded p-3 text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">Message</label>
          <textarea
            placeholder="Write your message..."
            className="w-full min-h-24 border border-gray-300 rounded p-3 text-sm"
          />
        </div>

        <button
          onClick={handleSend}
          disabled={sending}
          className="bg-black text-white rounded px-6 py-3 text-sm font-bold"
        >
          {sending ? "Sending..." : "Send message"}
        </button>

        {sent && (
          <p className="text-gray-700 text-sm mt-3">
            Message sent - I'll get back to you soon.
          </p>
        )}
      </div>
    </div>
  );
}