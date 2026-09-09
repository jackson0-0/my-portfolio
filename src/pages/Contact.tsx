import { useState } from "react";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSend() {
    // 1. show the sending state so the button disables and gives feedback
    setSending(true);
    // 2. simulate a network request (replace with a real API call if this
    //    form should actually deliver messages)
    setTimeout(() => {
      // 3. clear the sending state and confirm success to the user
      setSending(false);
      setSent(true);
    }, 900);
  }

  return (
    <div className="min-h-screen bg-[#0a1420] text-[#eef2f6] px-4 sm:px-8 py-12 sm:py-16">
      <div className="max-w-xl mx-auto">
        <p className="text-[#3d6ea5] text-xs uppercase mb-2">Get in touch</p>
        <h1 className="text-3xl font-bold mb-1">Let's work together</h1>
        <p className="text-[#8a97a5] text-sm mb-8">
          Have a question or want to collaborate? Send me a message.
        </p>

        <div className="mb-4">
          <label className="block text-xs text-[#8a97a5] mb-1">Name</label>
          <input
            placeholder="Your name"
            className="w-full bg-[#0f1c2c] border border-[#1c2d3f] rounded p-3 text-sm text-[#eef2f6] outline-none focus:border-[#3d6ea5]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs text-[#8a97a5] mb-1">Email</label>
          <input
            placeholder="your@email.com"
            className="w-full bg-[#0f1c2c] border border-[#1c2d3f] rounded p-3 text-sm text-[#eef2f6] outline-none focus:border-[#3d6ea5]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs text-[#8a97a5] mb-1">Subject</label>
          <input
            placeholder="What's this about?"
            className="w-full bg-[#0f1c2c] border border-[#1c2d3f] rounded p-3 text-sm text-[#eef2f6] outline-none focus:border-[#3d6ea5]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs text-[#8a97a5] mb-1">Message</label>
          <textarea
            placeholder="Write your message..."
            className="w-full min-h-24 bg-[#0f1c2c] border border-[#1c2d3f] rounded p-3 text-sm text-[#eef2f6] outline-none focus:border-[#3d6ea5]"
          />
        </div>

        <button
          onClick={handleSend}
          disabled={sending}
          className="bg-[#3d6ea5] text-white rounded px-6 py-3 text-sm font-bold hover:bg-[#4a7db4] disabled:opacity-70"
        >
          {sending ? "Sending..." : "Send message"}
        </button>

        {sent && (
          <p className="text-[#3d6ea5] text-sm mt-3">
            Message sent - I'll get back to you soon.
          </p>
        )}
      </div>
    </div>
  );
}