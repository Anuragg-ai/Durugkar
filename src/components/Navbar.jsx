import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/works' },
    { name: 'Process', path: '/process' },
    { name: 'FAQs', path: '/faq' },
  ];

  return (
    <nav className={styles.navbar}>
      {/* Brand Logo */}
      <div className={styles.logo}>
        <NavLink to="/" className={styles.logoText}>
          <span>Durugkar</span>
        </NavLink>
      </div>

      {/* Center Links Container */}
      <div className={styles.navLinksContainer}>
        <div className={`${styles.navLinks} ${isOpen ? styles.mobileOpen : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `${styles.navLink} ${isActive && item.path !== '#' ? styles.active : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Right Section CTA Buttons */}
      <div className={styles.rightSection}>
        <NavLink to="/contact" style={{textDecoration: 'none'}}>
          <button className={styles.startBtn}>
            Start your case
            <div className={styles.arrowIcon}>
              <ArrowUpRight size={14} color="#DDA24C" />
            </div>
          </button>
        </NavLink>

        <NavLink to="/contact" style={{textDecoration: 'none'}}>
          <button className={styles.quoteBtn}>
            Get a free quote
            <div className={styles.arrowIcon}>
              <ArrowUpRight size={14} color="#111A23" />
            </div>
          </button>
        </NavLink>
        
        <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
