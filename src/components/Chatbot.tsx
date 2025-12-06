"use client";
import { useState, useEffect, useRef } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [introText, setIntroText] = useState("");
  const [showPermanentText, setShowPermanentText] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const fullIntro = "Hi, I am Ebrahim's Assistant.";

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setIntroText(fullIntro.slice(0, index + 1));
      index++;
      if (index === fullIntro.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIntroText("");
          setShowPermanentText(true);
        }, 1500);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    const userMessage = input;
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Oops! Something went wrong." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">

      {/* Chat Window */}
      {isOpen && (
        <div className="
          w-full max-w-[22rem] sm:max-w-[24rem] 
          bg-gradient-to-br from-neutral-900 to-neutral-800 
          text-white rounded-2xl shadow-2xl overflow-hidden 
          flex flex-col border border-blue-500/50 backdrop-blur-md 
          animate-fadeIn
        ">
          <div className="flex justify-between items-center bg-neutral-800/90 px-4 py-3 border-b border-blue-500/50">
            <div className="flex items-center gap-2">
              <span className="text-blue-400 text-xl animate-pulse">💬</span>
              <h3 className="font-bold text-lg text-white/90">Ebrahim's Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white font-bold"
            >
              ✕
            </button>
          </div>

          {/* Scrollable Messages */}
          <div className="
            flex-1 p-4 overflow-y-auto space-y-3 
            max-h-[60vh] sm:max-h-[70vh] md:max-h-[75vh]
          ">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`px-4 py-2 rounded-xl max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white self-end"
                    : "bg-neutral-700 text-white/90 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="bg-neutral-700 text-white/70 self-start px-4 py-2 rounded-xl inline-flex items-center gap-1">
                <span className="dot animate-bounce bg-white w-2 h-2 rounded-full"></span>
                <span className="dot animate-bounce delay-200 bg-white w-2 h-2 rounded-full"></span>
                <span className="dot animate-bounce delay-400 bg-white w-2 h-2 rounded-full"></span>
                Typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="flex p-3 border-t border-blue-500/50 bg-neutral-900/90">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your question..."
              className="flex-1 bg-neutral-800/70 text-white rounded-xl px-3 py-2 outline-none placeholder:text-gray-400"
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl font-semibold"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div className="flex flex-col items-center">
        {introText && (
          <div className="relative mb-2 px-3 py-1 bg-neutral-800/90 rounded-xl text-sm font-medium text-white shadow-lg animate-fadeIn">
            {introText}
          </div>
        )}

        {showPermanentText && (
          <div className="relative mb-2 px-3 py-1 bg-neutral-800/90 rounded-xl text-sm font-medium text-white shadow-lg animate-fadeIn">
            Ask me anything
          </div>
        )}

        <img
          src="/chaticon.png"
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 sm:w-16 sm:h-16 mt-5 cursor-pointer animate-bounce hover:animate-none transition-all"
        />
      </div>

      <style jsx>{`
        .dot { display: inline-block; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </div>
  );
}
