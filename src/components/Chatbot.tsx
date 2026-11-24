"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Bot, Sparkles, X } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !hasOpenedOnce) {
      setMessages([
        {
          sender: "bot",
          text: "Hello — I am Ebrahim Hanif's portfolio assistant. Ask about his engineering work, stack, research, or availability.",
        },
      ]);
      setHasOpenedOnce(true);
    }
  }, [isOpen, hasOpenedOnce]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    setMessages((prev) => [...prev, { sender: "user", text: trimmed }]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            data?.reply ||
            "Unable to process that right now. Please email ebrahimhanif@ieee.org.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Connection error. Please try again or reach out at ebrahimhanif@ieee.org.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            role="dialog"
            aria-label="Portfolio Assistant Chat"
            initial={{ opacity: 0, y: 18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] bg-[#111113] border border-[#27272A] shadow-2xl rounded-lg overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#09090B] border-b border-[#222225]">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-sky-400/30 text-sky-400">
                  <Bot size={15} strokeWidth={1.75} />
                </span>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium text-[#FAFAFA] tracking-tight">
                    Ebrahim&apos;s Assistant
                  </h3>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-sky-300 border border-sky-400/30 bg-sky-500/10 px-1.5 py-0.5 rounded-sm">
                    <Sparkles size={10} strokeWidth={1.75} />
                    AI
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close assistant"
                className="inline-flex items-center justify-center w-7 h-7 rounded-md text-[#71717A] hover:text-[#FAFAFA] hover:bg-[#18181B] transition-colors cursor-pointer"
              >
                <X size={15} strokeWidth={1.5} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[340px] p-4 overflow-y-auto space-y-3 bg-[#09090B] flex flex-col">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className={`px-3.5 py-2.5 rounded-md max-w-[85%] text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#FAFAFA] text-[#09090B] self-end"
                      : "bg-[#111113] border border-[#222225] text-[#FAFAFA] self-start"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#111113] border border-[#222225] text-[#71717A] self-start px-3.5 py-2.5 rounded-md flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400/80 animate-bounce [animation-delay:-0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400/80 animate-bounce [animation-delay:-0.1s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400/80 animate-bounce" />
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 p-3 border-t border-[#222225] bg-[#111113]"
            >
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about projects, stack, or CV..."
                aria-label="Message assistant"
                className="flex-1 bg-[#09090B] border border-[#222225] focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/15 text-[#FAFAFA] rounded-md px-3 py-2 text-sm outline-none placeholder:text-[#71717A] transition-all duration-200"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                aria-label="Send message"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-[#FAFAFA] text-[#09090B] hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 active:scale-95 cursor-pointer shrink-0"
              >
                <ArrowUp size={16} strokeWidth={1.75} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating AI Assistant Trigger */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="chat-trigger"
            type="button"
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.92 }}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setIsOpen(true)}
            aria-label="Open AI portfolio assistant"
            className="group fixed bottom-6 right-5 sm:right-6 z-50 inline-flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-full bg-[#111113]/95 backdrop-blur-md border border-sky-400/35 hover:border-sky-400/70 shadow-[0_12px_32px_-6px_rgba(0,0,0,0.85),0_0_24px_-4px_rgba(56,189,248,0.28)] hover:shadow-[0_14px_36px_-6px_rgba(0,0,0,0.9),0_0_30px_-2px_rgba(56,189,248,0.45)] text-[#FAFAFA] transition-all duration-300 cursor-pointer"
          >
            <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 text-[#09090B] shadow-inner">
              <Bot size={17} strokeWidth={2} className="transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 border border-[#09090B]" />
              </span>
            </span>

            <span className="flex flex-col items-start leading-none">
              <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-tight text-white">
                Ask AI
                <Sparkles size={11} strokeWidth={2} className="text-sky-400" />
              </span>
              <span className="mt-0.5 font-mono text-[10px] text-[#A1A1AA] group-hover:text-zinc-300 transition-colors">
                Ebrahim's AI Assistant
              </span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
