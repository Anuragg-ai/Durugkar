import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import styles from '../styles/About.module.css'; // Reusing some shared layout styles

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) return <section><h2>Article Not Found</h2><Link to="/articles">Back to Articles</Link></section>;

  return (
    <section>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link to="/articles" style={{ color: 'var(--color-accent)', marginBottom: '2rem', display: 'inline-block' }}>← Back to Articles</Link>
          <div style={{ color: 'var(--color-muted)', marginBottom: '1rem' }}>{article.date} | {article.category}</div>
          <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>{article.title}</h1>
          <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
            {article.content}
            <p style={{ marginTop: '2rem' }}>Lorum ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
