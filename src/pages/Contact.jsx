import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form handling logic would go here
  };

  return (
    <div className={styles.contactPage}>
      {/* Header Section */}
      <header className={styles.headerSection}>
        <div className={styles.headerContainer}>
          <div className={styles.headerLeft}>
            <div className={styles.badge}>CONTACT</div>
            <h1 className={styles.title}>Let's Discuss Your Legal Matter</h1>
            <button className={styles.titleCTA}>
              Get a free quote
              <div className={styles.ctaIcon}>
                <ArrowUpRight size={16} strokeWidth={3} />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Main Form Section */}
      <section className={styles.formSection}>
        <div className={styles.formContainer}>

          {/* Info Column */}
          <div className={styles.infoCol}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <p className={styles.infoText}>
              Have a legal question or need professional guidance? Contact me to schedule a consultation and receive clear, confidential legal advice tailored to your needs.
            </p>

            <div className={styles.contactMethod}>
              <h3 className={styles.methodTitle}>Chat On Whatsapp</h3>
              <a href="https://wa.me/10634873487698" className={styles.whatsappLink} target="_blank" rel="noopener noreferrer">
                +91 94221 20494
              </a>
            </div>
          </div>

          {/* Form Card Column */}
          <div className={styles.formCard}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.formField}>
                  <input type="text" placeholder="Your Name" className={styles.input} required />
                </div>
                <div className={styles.formField}>
                  <input type="email" placeholder="Email Address" className={styles.input} required />
                </div>
                <div className={styles.formField}>
                  <input type="tel" placeholder="Phone Number" className={styles.input} required />
                </div>
                <div className={styles.formField}>
                  <select className={styles.select} required>
                    <option value="" disabled selected>Legal Services</option>
                    <option value="matrimonial">Matrimonial Law</option>
                    <option value="civil">Civil Litigation</option>
                    <option value="aid">Legal Aid & Consultation</option>
                    <option value="mediation">Mediation & ADR</option>
                  </select>
                </div>
                <div className={`${styles.formField} ${styles.fullWidth}`}>
                  <input type="text" placeholder="Subject" className={styles.input} required />
                </div>
                <div className={`${styles.formField} ${styles.fullWidth}`}>
                  <textarea placeholder="Your Message" className={styles.textarea} required></textarea>
                </div>
              </div>

              <label className={styles.checkboxRow}>
                <input type="checkbox" className={styles.checkbox} required />
                <span className={styles.checkboxLabel}>I confirm the information provided is accurate.</span>
              </label>

              <button type="submit" className={styles.submitBtn}>
                Request Consultation
                <div className={styles.btnIcon}>
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </div>
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
