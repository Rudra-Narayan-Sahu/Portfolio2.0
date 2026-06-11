import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend, FiUser } from 'react-icons/fi';
import { RiRobot2Line } from 'react-icons/ri';

const BACKEND_URL = 'https://portfolio-ai-assistant-0gv1.onrender.com';

/* ─── Spinning loader for the send button ─── */
const SpinnerIcon = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
    style={{
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: '2px solid rgba(61,220,132,0.25)',
      borderTopColor: '#3ddc84',
    }}
  />
);

/* ─── Dots typing indicator bubble ─── */
const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 8 }}
    transition={{ duration: 0.2 }}
    style={{ display: 'flex', alignItems: 'flex-end', gap: 10, marginBottom: 18 }}
  >
    {/* Avatar */}
    <div
      style={{
        width: 34,
        height: 34,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #3ddc84, #1aad5e)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 0 12px rgba(61,220,132,0.35)',
      }}
    >
      <RiRobot2Line size={17} color="#0B0F0D" />
    </div>

    {/* Bubble */}
    <div
      style={{
        padding: '14px 18px',
        borderRadius: '20px 20px 20px 5px',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(61,220,132,0.18)',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      {/* Dots row */}
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--theme-color, #3ddc84)',
            }}
            animate={{
              y: [0, -7, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.18,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Thinking text with blinking cursor */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <span style={{ fontSize: 11.5, color: '#3ddc84', letterSpacing: 0.3 }}>
          Thinking
        </span>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            style={{ fontSize: 13, color: '#3ddc84', lineHeight: 1 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.22,
              ease: 'easeInOut',
            }}
          >
            .
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

/* ─── Scanning bar loading overlay shown on the send button ─── */
const LoadingBar = () => (
  <motion.div
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 2,
      background: 'linear-gradient(90deg, #3ddc84, #1aad5e)',
      borderRadius: 2,
    }}
    initial={{ width: '0%' }}
    animate={{ width: ['0%', '70%', '90%'] }}
    transition={{ duration: 2.5, ease: 'easeOut' }}
  />
);

/* ─── Individual message bubble ─── */
const Message = ({ msg }) => {
  const isUser = msg.role === 'user';
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      style={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        alignItems: 'flex-end',
        gap: 10,
        marginBottom: 16,
      }}
    >
      {!isUser && (
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3ddc84, #1aad5e)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 0 12px rgba(61,220,132,0.3)',
          }}
        >
          <RiRobot2Line size={17} color="#0B0F0D" />
        </div>
      )}

      <div
        style={{
          maxWidth: '78%',
          padding: '12px 16px',
          borderRadius: isUser ? '20px 20px 5px 20px' : '20px 20px 20px 5px',
          background: isUser
            ? 'linear-gradient(135deg, #3ddc84, #1aad5e)'
            : 'rgba(255,255,255,0.06)',
          border: isUser ? 'none' : '1px solid rgba(255,255,255,0.1)',
          color: isUser ? '#0B0F0D' : '#e2e8e4',
          fontSize: 14,
          lineHeight: 1.6,
          fontWeight: isUser ? 500 : 400,
          wordBreak: 'break-word',
          whiteSpace: 'pre-wrap',
          boxShadow: isUser
            ? '0 4px 16px rgba(61,220,132,0.2)'
            : '0 2px 8px rgba(0,0,0,0.2)',
        }}
      >
        {msg.content}
      </div>

      {isUser && (
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <FiUser size={15} color="#e2e8e4" />
        </div>
      )}
    </motion.div>
  );
};

/* ─── Quick-ask suggestions ─── */
const SUGGESTED = [
  '🚀 Tell me about TalentLens AI',
  '🤖 What AI projects did you build?',
  '💻 What are your top skills?',
  '📬 How can I hire you?',
];

/* ════════════════════════════════════════════ */
const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hey! 👋 I'm the AI assistant for this portfolio. Ask me anything about the projects, skills, or experience!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 320);
  }, [isOpen]);

  const resetTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const sendMessage = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg || isLoading) return;

    setInput('');
    resetTextarea();
    setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 55000);
      const res = await fetch(`${BACKEND_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
        signal: controller.signal,
      });
      clearTimeout(timeout);
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      const msg = err.name === 'AbortError'
        ? '⚠️ The server is waking up from sleep (Render free tier). Please try again in a moment!'
        : '⚠️ Cannot reach the AI server. Make sure the backend is deployed and GROQ_API_KEY is set in Render environment variables.';
      setMessages((prev) => [...prev, { role: 'assistant', content: msg }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const canSend = input.trim() && !isLoading;
  const showSuggestions = messages.length <= 1;

  return (
    <>
      {/* ─── Floating Trigger Button ─── */}
      <motion.button
        id="chat-assistant-toggle"
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        style={{
          position: 'fixed',
          bottom: isMobile ? 16 : 30,
          right: isMobile ? 16 : 30,
          zIndex: 9999,
          width: isMobile ? 52 : 62,
          height: isMobile ? 52 : 62,
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          background: 'linear-gradient(135deg, #3ddc84, #1aad5e)',
          boxShadow: '0 6px 28px rgba(61,220,132,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0B0F0D',
        }}
        aria-label="Open AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <FiX size={26} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <RiRobot2Line size={26} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Unread dot */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            style={{
              position: 'fixed',
              bottom: isMobile ? 60 : 84,
              right: isMobile ? 14 : 28,
              zIndex: 10000,
              width: 13,
              height: 13,
              borderRadius: '50%',
              background: '#ff4d6d',
              border: '2px solid #0B0F0D',
            }}
          />
        )}
      </AnimatePresence>

      {/* ─── Chat Panel ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chat-assistant-panel"
            initial={{ opacity: 0, y: 32, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            style={{
              position: 'fixed',
              bottom: isMobile ? 76 : 106,
              right: isMobile ? 8 : 30,
              left: isMobile ? 8 : 'auto',
              zIndex: 9998,
              width: isMobile ? 'auto' : 430,
              maxWidth: isMobile ? '100vw' : 'calc(100vw - 48px)',
              height: isMobile ? 'calc(100vh - 100px)' : 620,
              maxHeight: isMobile ? 'calc(100vh - 100px)' : 'calc(100vh - 130px)',
              borderRadius: 22,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(10, 14, 12, 0.97)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(61,220,132,0.22)',
              boxShadow:
                '0 24px 70px rgba(0,0,0,0.65), 0 0 0 1px rgba(61,220,132,0.07)',
            }}
          >
            {/* ── Header ── */}
            <div
              style={{
                padding: '18px 20px',
                background:
                  'linear-gradient(90deg, rgba(61,220,132,0.13), rgba(26,173,94,0.07))',
                borderBottom: '1px solid rgba(61,220,132,0.14)',
                display: 'flex',
                alignItems: 'center',
                gap: 13,
                position: 'relative',
              }}
            >
              {/* Glow line if loading */}
              <AnimatePresence>{isLoading && <LoadingBar />}</AnimatePresence>

              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #3ddc84, #1aad5e)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 0 16px rgba(61,220,132,0.4)',
                }}
              >
                <RiRobot2Line size={22} color="#0B0F0D" />
              </div>

              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontWeight: 700, fontSize: 15, color: '#fff' }}>
                  Portfolio Assistant
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
                  {isLoading ? (
                    <>
                      <motion.div
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: '50%',
                          background: '#facc15',
                        }}
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                      <span style={{ fontSize: 11.5, color: '#facc15', fontStyle: 'italic' }}>
                        Thinking…
                      </span>
                    </>
                  ) : (
                    <>
                      <motion.div
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: '50%',
                          background: '#3ddc84',
                        }}
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span style={{ fontSize: 11.5, color: '#3ddc84' }}>Online · Powered by Groq</span>
                    </>
                  )}
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  width: 30,
                  height: 30,
                  cursor: 'pointer',
                  color: '#B8C1BC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label="Close chat"
              >
                <FiX size={16} />
              </button>
            </div>

            {/* ── Messages ── */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '18px 16px 10px',
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(61,220,132,0.2) transparent',
              }}
            >
              {messages.map((msg, i) => (
                <Message key={i} msg={msg} />
              ))}

              {/* Typing indicator bubble */}
              <AnimatePresence>{isLoading && <TypingIndicator />}</AnimatePresence>

              {/* Quick suggestions */}
              {showSuggestions && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{ marginTop: 10 }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      color: '#4a5e52',
                      marginBottom: 10,
                      textAlign: 'center',
                      letterSpacing: 0.5,
                      textTransform: 'uppercase',
                    }}
                  >
                    Quick questions
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {SUGGESTED.map((s) => (
                      <motion.button
                        key={s}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => sendMessage(s.replace(/^\S+\s/, ''))}
                        style={{
                          background: 'rgba(61,220,132,0.05)',
                          border: '1px solid rgba(61,220,132,0.18)',
                          borderRadius: 11,
                          padding: '10px 14px',
                          color: '#B8C1BC',
                          fontSize: 13,
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s',
                        }}
                      >
                        {s}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ── Input bar ── */}
            <div
              style={{
                padding: '14px 16px 16px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              {/* "AI is generating…" strip */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 28 }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      marginBottom: 10,
                      paddingLeft: 4,
                      overflow: 'hidden',
                    }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: '50%',
                        border: '2px solid rgba(61,220,132,0.2)',
                        borderTopColor: '#3ddc84',
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: 12, color: '#3ddc84', fontStyle: 'italic' }}>
                      AI is generating a response…
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: 10,
                  background: 'rgba(255,255,255,0.05)',
                  border: `1px solid ${canSend ? 'rgba(61,220,132,0.4)' : 'rgba(61,220,132,0.18)'}`,
                  borderRadius: 16,
                  padding: '10px 10px 10px 16px',
                  transition: 'border-color 0.25s',
                }}
              >
                <textarea
                  ref={(el) => {
                    inputRef.current = el;
                    textareaRef.current = el;
                  }}
                  id="chat-input"
                  rows={1}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    e.target.style.height = 'auto';
                    e.target.style.height = Math.min(e.target.scrollHeight, 110) + 'px';
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder={isLoading ? 'Waiting for response…' : 'Ask me anything…'}
                  disabled={isLoading}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: isLoading ? '#4a5e52' : '#e2e8e4',
                    fontSize: 14,
                    resize: 'none',
                    lineHeight: 1.55,
                    maxHeight: 110,
                    overflowY: 'auto',
                    fontFamily: 'inherit',
                  }}
                />

                {/* Send / Spinner button */}
                <motion.button
                  id="chat-send-button"
                  onClick={() => sendMessage()}
                  disabled={!canSend}
                  whileHover={canSend ? { scale: 1.12 } : {}}
                  whileTap={canSend ? { scale: 0.88 } : {}}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    border: 'none',
                    cursor: canSend ? 'pointer' : 'not-allowed',
                    background: canSend
                      ? 'linear-gradient(135deg, #3ddc84, #1aad5e)'
                      : 'rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background 0.25s',
                    boxShadow: canSend ? '0 4px 14px rgba(61,220,132,0.35)' : 'none',
                  }}
                  aria-label="Send message"
                >
                  {isLoading ? (
                    <SpinnerIcon />
                  ) : (
                    <FiSend size={16} color={canSend ? '#0B0F0D' : '#4a5e52'} />
                  )}
                </motion.button>
              </div>

              <p
                style={{
                  margin: '8px 0 0',
                  fontSize: 10.5,
                  color: '#3a4e42',
                  textAlign: 'center',
                  letterSpacing: 0.3,
                }}
              >
                Enter to send · Shift+Enter for new line
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAssistant;
