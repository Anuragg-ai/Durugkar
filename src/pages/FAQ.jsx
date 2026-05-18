import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import styles from '../styles/FAQ.module.css';

const FAQData = [
  {
    id: 1,
    question: "Do You Offer An Initial Consultation?",
    answer: "Yes, we offer an initial consultation to discuss the specifics of your case and determine how we can best assist you in achieving a favorable outcome."
  },
  {
    id: 2,
    question: "How Are Legal Fees Calculated?",
    answer: "Fees depend on the nature, complexity, and duration of the case. We explain all costs clearly before starting any work to ensure complete transparency."
  },
  {
    id: 3,
    question: "Will My Information Remain Confidential?",
    answer: "Absolutely. Attorney-client privilege is a cornerstone of our practice. Your information and case details are kept strictly confidential at all times."
  },
  {
    id: 4,
    question: "How Long Will My Case Take?",
    answer: "The timeline varies based on the legal matter and court schedules. We strive for efficient resolution while ensuring every detail is meticulously handled."
  },
  {
    id: 5,
    question: "Do You Handle Cases Outside Your City?",
    answer: "Yes, we represent clients across Maharashtra, Chhattisgarh, and Madhya Pradesh, appearing in various District and High Courts as required."
  },
  {
    id: 6,
    question: "How Can I Get Started?",
    answer: "You can start by contacting us via our website or phone to schedule a consultation. We will guide you through the next steps based on your situation."
  }
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(2); // Step 2 is active by default as seen in mockup

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className={styles.faqPage}>
      <div className={styles.container}>
        
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.badge}>FAQ</div>
          <h1 className={styles.title}>
            Answers To <span className={styles.titleHighlight}>Questions.</span>
          </h1>
          <p className={styles.description}>
            Our FAQ section is designed to answer common questions about our legal services, fees, confidentiality, and consultation process. We believe in transparency.
          </p>
          <NavLink to="/contact" className={styles.ctaBtn}>
            Get a free quote
            <div className={styles.ctaIcon}>
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </div>
          </NavLink>
        </div>

        {/* Right Section - Accordion */}
        <div className={styles.rightSection}>
          {FAQData.map((item) => (
            <div 
              key={item.id} 
              className={`${styles.accordionItem} ${activeId === item.id ? styles.active : ''}`}
            >
              <button 
                className={styles.accordionHeader} 
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={activeId === item.id}
              >
                <h3 className={styles.questionTitle}>{item.question}</h3>
                <div className={styles.toggleIcon}>
                  <ChevronDown size={24} style={{ transform: activeId === item.id ? 'rotate(180deg)' : 'rotate(0)' }} />
                </div>
              </button>
              <div className={styles.accordionContent}>
                <p className={styles.answerText}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQ;
