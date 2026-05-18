import React from 'react';
import { ArrowUpRight, MessageCircle, BarChart2, Shield, Handshake } from 'lucide-react';
import styles from '../styles/Process.module.css';

const Process = () => {
  return (
    <div className={styles.processPage}>
      <div className={styles.container}>
        
        {/* Left Text Block */}
        <div className={styles.textSection}>
          <div className={styles.badge}>PROCESS</div>
          <h1 className={styles.title}>
            Simple Legal <span className={styles.titleHighlight}>Process</span>
          </h1>
          <p className={styles.description}>
            I follow a clear, structured approach to ensure each case is handled with precision, transparency, and care. From the initial consultation to final resolution, my process is designed to protect your interests and deliver confident legal outcomes.
          </p>
          <button className={styles.ctaBtn}>
            Get A Free Quote
            <div className={styles.ctaIcon}>
              <ArrowUpRight size={16} strokeWidth={3} />
            </div>
          </button>
        </div>

        {/* Right Timeline Block */}
        <div className={styles.timelineSection}>
          
          {/* Animated/Static CSS Curve Background */}
          <svg className={styles.curveLine} preserveAspectRatio="none" viewBox="0 0 1000 500">
             <path d="M0 450 C 150 450, 150 150, 250 150 S 400 350, 500 300 S 650 100, 750 100 S 900 0, 1000 0" />
          </svg>

          {/* Step 1 */}
          <div className={`${styles.stepWrapper} ${styles.step1}`}>
            <div className={styles.nodePoint}><div className={styles.nodeInner}></div></div>
            <div className={`${styles.card} ${styles.cardWhite}`}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>01.</span>
                <div className={styles.cardIcon}><MessageCircle size={20} strokeWidth={2.5} /></div>
              </div>
              <h3 className={styles.cardTitle}>Initial<br/>Consultation</h3>
            </div>
          </div>

          {/* Step 2 */}
          <div className={`${styles.stepWrapper} ${styles.step2}`}>
            <div className={styles.nodePoint}><div className={styles.nodeInner}></div></div>
            <div className={`${styles.card} ${styles.cardDark}`}>
              <img src="/images/process_strategy.png" alt="Strategy" className={styles.imageBg} />
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardNumber}>02.</span>
                  <div className={styles.cardIcon}><BarChart2 size={20} strokeWidth={2.5} /></div>
                </div>
                <h3 className={styles.cardTitle}>Strategy<br/>Development</h3>
                <p className={styles.cardDesc}>
                  Our team drafts a bespoke legal roadmap tailored to your specific industry or personal needs.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className={`${styles.stepWrapper} ${styles.step3}`}>
            <div className={styles.nodePoint}><div className={styles.nodeInner}></div></div>
            <div className={`${styles.card} ${styles.cardWhite}`}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>03.</span>
                <div className={styles.cardIcon}><Shield size={20} strokeWidth={2.5} /></div>
              </div>
              <h3 className={styles.cardTitle}>Execution &<br/>Advocacy</h3>
            </div>
          </div>

          {/* Step 4 */}
          <div className={`${styles.stepWrapper} ${styles.step4}`}>
            <div className={styles.nodePoint}><div className={styles.nodeInner}></div></div>
            <div className={`${styles.card} ${styles.cardWhite}`}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>04.</span>
                <div className={styles.cardIcon}><Handshake size={20} strokeWidth={2.5} /></div>
              </div>
              <h3 className={styles.cardTitle}>Case<br/>Resolution</h3>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Process;
