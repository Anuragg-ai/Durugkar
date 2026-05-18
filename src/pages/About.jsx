import styles from '../styles/About.module.css';
import { clsx } from 'clsx';

const About = () => {
  return (
    <div className={styles.about}>
      <section>
        <div className={clsx("container", styles.aboutGrid)}>
          <div className={styles.imagePlaceholder}>
            <img src="/images/Adv Jyoti Durugkar.png" alt="Advocate Jyoti Durugkar" />
          </div>
          <div className={styles.biography}>
            <h2>Adv. Jyoti Durugkar</h2>
            <p>
              With over 25 years of experience in the legal field, Advocate Jyoti Durugkar has built a formidable reputation for meticulous preparation, strategic case handling, and aggressive advocacy. Having commenced her legal career in 2001, she is driven by a profound commitment to justice and client advocacy, establishing a prominent presence across Maharashtra, Chhattisgarh, and Madhya Pradesh.
            </p>
            <p>
              Her approach combines profound legal wisdom with modern strategic insights. While primarily practicing at the Gondia District Court, she regularly appears before higher judicial authorities, including the Nagpur Bench of the Bombay High Court and the Jabalpur High Court, ensuring every client receives robust and ethical representation.
            </p>
            
            <div className={styles.credentials}>
              <h3>Professional Credentials & Service</h3>
              <ul>
                <li>25+ Years of Dedicated Legal Practice (Est. 2001)</li>
                <li>Panel Advocate, District Legal Services Authority (DLSA)</li>
                <li>Specialization in Matrimonial Law & Civil Litigation</li>
                <li>Practicing across local District Courts and High Courts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;
