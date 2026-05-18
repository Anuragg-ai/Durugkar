import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Column 1 - CTA */}
        <div className={styles.ctaCol}>
          <h2 className={styles.ctaTitle}>
            Do You Like <span className={styles.highlight}>What You See?</span>
          </h2>
          <p className={styles.ctaDesc}>
            Providing expert legal representation and strategic counsel to protect your rights and future. Dedicated to your success through integrity and excellence.
          </p>
          <NavLink to="/contact" className={styles.workTogether}>
            Let's work together &rarr;
          </NavLink>
        </div>

        {/* Column 2 - Quick Links */}
        <div className={styles.linkCol}>
          <h3 className={styles.colTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li><NavLink to="/about" className={styles.footerLink}>About</NavLink></li>
            <li><NavLink to="/services" className={styles.footerLink}>Services</NavLink></li>
            <li><NavLink to="/works" className={styles.footerLink}>Projects</NavLink></li>
            <li><NavLink to="/process" className={styles.footerLink}>Process</NavLink></li>
            <li><NavLink to="/faq" className={styles.footerLink}>FAQs</NavLink></li>
            <li><NavLink to="/contact" className={styles.footerLink}>Contact</NavLink></li>
          </ul>
        </div>

        {/* Column 4 - Connect Me */}
        <div className={styles.connectCol}>
          <h3 className={styles.colTitle}>Connect Me</h3>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <Mail size={18} className={styles.icon} />
              <p className={styles.infoText}>contact@durugkar.com</p>
            </div>
            <div className={styles.infoItem}>
              <Phone size={18} className={styles.icon} />
              <p className={styles.infoText}>+91 94221 20494</p>
            </div>
            <div className={styles.infoItem}>
              <MapPin size={18} className={styles.icon} />
              <p className={styles.infoText}>
                Adv. Jyoti Durugkar<br />
                Gondia,<br />
                Maharashtra, India
              </p>
            </div>
          </div>
          
          <div className={styles.socialRow}>
            <div className={styles.socialIcon}><Facebook size={18} /></div>
            <div className={styles.socialIcon}><Instagram size={18} /></div>
            <div className={styles.socialIcon}><Linkedin size={18} /></div>
            <div className={styles.socialIcon}><Twitter size={18} /></div>
          </div>
        </div>

      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Adv. Jyoti Durugkar. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
