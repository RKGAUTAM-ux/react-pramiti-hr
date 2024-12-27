import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQs = [
  {
    question: "What is the difference between HR and AI HR?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is the role of AI in HR?",
    answer:
      "AI in HR can automate repetitive tasks, provide data-driven insights, and improve the hiring process through advanced analytics and algorithms.",
  },
  {
    question: "How does AI improve employee management?",
    answer:
      "AI helps improve employee management by analyzing performance data, predicting trends, and offering personalized recommendations for career growth.",
  },
];

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? -1 : index); // Toggle FAQ
  };

  return (
    <section className="faq-section">
      <div className="section-header">
        <h2>
          Frequently Asked <span className="gradient-txt">Questions</span>
        </h2>
      </div>
      <div className="faq-inner">
        {FAQs.map((faq, index) => (
          <div
            key={index}
            className={`faqItem ${openIndex === index ? "active" : ""}`}
            style={{
              borderBottom: "1px solid #ddd",
              padding: "10px 0",
            }}
          >
            <h3
              onClick={() => toggleFAQ(index)}
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              {faq.question}
              <span style={{ fontSize: "18px", marginLeft: "10px" }}>
                {openIndex === index ? "-" : "+"}
              </span>
            </h3>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{
                    overflow: "hidden",
                    padding: "0 10px",
                    color: "#555",
                  }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
