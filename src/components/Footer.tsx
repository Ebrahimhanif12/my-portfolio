"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Later connect with backend / email service
    console.log(form);

    setForm({ name: "", email: "", message: "" });
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      <footer
        id="contact"
        className="relative z-10 bg-black text-white px-6 py-20 border-t border-neutral-800"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Let’s <span className="text-[#00ff9f]">Connect</span>
            </h2>

            <p className="text-gray-400 mb-8 max-w-md">
              Feel free to reach out for collaborations, freelance projects, or
              just a friendly chat about technology.
            </p>

            <div className="space-y-4 text-gray-300">
              <p>📧 <span className="text-[#00ffff]">email@example.com</span></p>
              <p>📍 <span className="text-[#00ffff]">Dhaka, Bangladesh</span></p>
              <p>💻 <span className="text-[#00ffff]">github.com/yourusername</span></p>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-900/60 backdrop-blur-md p-8 rounded-xl border border-neutral-800 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#00ffff]">
              Send a Message
            </h3>

            <div className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border border-neutral-700 rounded-lg px-4 py-3 text-white outline-none focus:border-[#00ff9f]"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border border-neutral-700 rounded-lg px-4 py-3 text-white outline-none focus:border-[#00ff9f]"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-black/40 border border-neutral-700 rounded-lg px-4 py-3 text-white outline-none focus:border-[#00ff9f] resize-none"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00ff9f] to-[#00ffff] text-black font-bold py-3 rounded-lg hover:opacity-90 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 pt-6 border-t border-neutral-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Ebrahim Hanif — All Rights Reserved.
        </div>
      </footer>

      {/* ✅ SUCCESS POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 bg-neutral-900 border border-[#00ff9f] text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3"
          >
            <span className="text-[#00ff9f] text-xl">✅</span>
            <div>
              <p className="font-semibold">Message Sent!</p>
              <p className="text-sm text-gray-400">
                I’ll get back to you soon.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
