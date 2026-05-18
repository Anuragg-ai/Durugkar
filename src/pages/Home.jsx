import React from 'react';
import { ArrowUpRight, Award, ThumbsUp, FileText, CheckCircle } from 'lucide-react';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.homePage}>
        {/* Background Graphic */}
        <img src="/images/scales_bg.png" alt="Scales of Justice Background" className={styles.bgImage} />

        {/* Hero Section */}
        <div className={styles.heroContent}>

          {/* Left Content */}
          <div className={styles.leftCol}>
            <h1 className={styles.title}>
              Your Legal<br />Solutions<br />
              <span className={styles.titleHighlight}>Partner</span>
            </h1>
          </div>

          {/* Center Content / Image */}
          <div className={styles.centerCol}>
            <img src="/images/bg-removebg-preview.png" alt="Advocate Robert" className={styles.lawyerImg} />
          </div>

          {/* Right Content */}
          <div className={styles.rightCol}>
          </div>

        </div>

        {/* Stats Bar */}
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <div className={styles.statIconContainer}>
              <Award size={32} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Years of Experience</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statIconContainer}>
              <ThumbsUp size={32} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statNumber}>95%</span>
              <span className={styles.statLabel}>Success rate</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statIconContainer}>
              <FileText size={32} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statNumber}>250+</span>
              <span className={styles.statLabel}>Cases completed</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statIconContainer}>
              <CheckCircle size={32} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>SRA Regulated</span>
            </div>
          </div>
        </div>
      </div>

      {/* New About Section */}
      <section className={styles.aboutNewSection}>
        <div className={styles.aboutNewContainer}>
          <div className={styles.aboutLeft}>
            <div className={styles.aboutBadge}>ABOUT ME</div>
            <h2 className={styles.aboutTitle}>
              Built On<br />Integrity,<br />Driven By<br />Justice
            </h2>
          </div>
          <div className={styles.aboutRight}>
            <p className={styles.aboutLeadText}>
              We are a client-focused law practice dedicated to protecting your rights and delivering clear, results-driven legal solutions.
            </p>
            <p className={styles.aboutBodyText}>
              With experience across a wide range of legal matters, we combine strategic thinking with precise execution to guide clients through complex situations with confidence. Our approach is grounded in professionalism, discretion, and a deep commitment to achieving the best possible outcomes—because your case deserves more than advice, it deserves advocacy.
            </p>
            <button className={styles.aboutCtaBtn}>
              Get a free quote
              <div className={styles.aboutArrowIcon}>
                <ArrowUpRight size={18} strokeWidth={3} />
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
