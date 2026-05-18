import styles from '../styles/GridPages.module.css';
import { articles } from '../data/articles';
import { Link } from 'react-router-dom';

const Articles = () => {
  return (
    <section>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2>Legal Insights</h2>
          <p>Expert commentary on evolving legal landscapes and critical precedents.</p>
        </div>
        <div className={styles.grid}>
          {articles.map((article) => (
            <article key={article.id} className={styles.card}>
              <div className={styles.date}>{article.date}</div>
              <span className={styles.categoryTag}>{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <Link to={`/articles/${article.id}`} className={styles.readMore}>Read Full Article →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
