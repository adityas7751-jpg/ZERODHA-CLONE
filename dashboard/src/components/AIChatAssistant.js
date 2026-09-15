import React, { useEffect, useMemo, useRef, useState } from "react";
import { holdings } from "../data/data";
import "./AIChatAssistant.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

const getPortfolio = () => {
  const totalInvestment = holdings.reduce((sum, stock) => sum + Number(stock.avg) * Number(stock.qty), 0);
  const currentValue = holdings.reduce((sum, stock) => sum + Number(stock.price) * Number(stock.qty), 0);
  const pnl = currentValue - totalInvestment;

  return {
    totalInvestment: Number(totalInvestment.toFixed(2)),
    currentValue: Number(currentValue.toFixed(2)),
    pnl: Number(pnl.toFixed(2)),
    pnlPercent: Number(((pnl / totalInvestment) * 100).toFixed(2)),
    holdings: holdings.map((stock) => ({
      name: stock.name,
      qty: stock.qty,
      avg: stock.avg,
      price: stock.price,
      value: Number((stock.price * stock.qty).toFixed(2)),
      pnl: Number(((stock.price - stock.avg) * stock.qty).toFixed(2))
    }))
  };
};

const AIChatAssistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I’m your portfolio assistant. Ask me about your holdings, P&L, diversification, or investing concepts."
    }
  ]);
  const messagesEndRef = useRef(null);
  const portfolio = useMemo(getPortfolio, []);

  useEffect(() => {
    const openAssistant = () => setOpen(true);
    window.addEventListener("open-ai-assistant", openAssistant);
    return () => window.removeEventListener("open-ai-assistant", openAssistant);
  }, []);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const ask = async (text) => {
    const message = String(text || input).trim();
    if (!message || loading) return;

    const nextMessages = [...messages, { role: "user", text: message }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          history: nextMessages.slice(-8),
          portfolio
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "AI request failed");
      setMessages((current) => [...current, { role: "assistant", text: data.reply }]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: error.message.includes("not configured")
            ? "The AI assistant is ready in the UI, but the backend still needs a GEMINI_API_KEY in its .env file."
            : "I couldn’t connect to the AI service. Please make sure the backend is running and try again."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const suggestions = [
    "Summarize my portfolio",
    "Which holding has the highest P&L?",
    "Explain diversification",
    "What is P/E ratio?"
  ];

  return (
    <>
      {!open && (
        <button className="ai-floating-button" onClick={() => setOpen(true)} aria-label="Open AI assistant">
          <span className="ai-spark">✦</span>
          <span>AI Assistant</span>
        </button>
      )}

      {open && (
        <div className="ai-overlay" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
          <section className="ai-chat-window" role="dialog" aria-modal="true" aria-label="AI portfolio assistant">
            <header className="ai-chat-header">
              <div className="ai-title-wrap">
                <div className="ai-avatar">✦</div>
                <div>
                  <strong>AI Portfolio Assistant</strong>
                  <small><span /> Online</small>
                </div>
              </div>
              <button className="ai-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
            </header>

            <div className="ai-suggestions">
              {suggestions.map((item) => (
                <button key={item} onClick={() => ask(item)} disabled={loading}>{item}</button>
              ))}
            </div>

            <div className="ai-messages">
              {messages.map((item, index) => (
                <div key={`${item.role}-${index}`} className={`ai-message ${item.role}`}>
                {item.text.replace(/\*+/g, "")}
                </div>
              ))}
              {loading && <div className="ai-message assistant typing"><span /><span /><span /></div>}
              <div ref={messagesEndRef} />
            </div>

            <form className="ai-input-row" onSubmit={(event) => { event.preventDefault(); ask(); }}>
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about your portfolio..."
                disabled={loading}
              />
              <button type="submit" disabled={loading || !input.trim()} aria-label="Send">➤</button>
            </form>
            <p className="ai-disclaimer">AI can make mistakes. This assistant is for education and portfolio analysis, not guaranteed financial advice.</p>
          </section>
        </div>
      )}
    </>
  );
};

export default AIChatAssistant;
