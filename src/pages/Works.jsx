import styles from '../styles/GridPages.module.css';
import { works } from '../data/works';
import { Link } from 'react-router-dom';

const Works = () => {
  return (
    <section>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2>Select Case Studies</h2>
          <p>A portfolio of significant legal achievements across various jurisdictions.</p>
        </div>
        <div className={styles.grid}>
          {works.map((work) => (
            <div key={work.id} className={styles.card}>
              <span className={styles.categoryTag}>{work.category}</span>
              <h3>{work.title}</h3>
              <p>{work.summary}</p>
              <Link to="/works" className={styles.readMore}>View Case Details →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
