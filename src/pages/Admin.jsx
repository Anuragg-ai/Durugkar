import { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';
import styles from '../styles/Admin.module.css';

const Admin = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const res = await fetch('http://localhost:5001/api/contact');
        const data = await res.json();
        if (data.success) {
          setSubmissions(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch submissions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSubmissions();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    
    try {
      const res = await fetch(`http://localhost:5001/api/contact/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success) {
        setSubmissions(submissions.filter(sub => sub._id !== id));
      } else {
        alert("Failed to delete message.");
      }
    } catch (error) {
      console.error("Error deleting:", error);
      alert("Error deleting message.");
    }
  };

  return (
    <div className={styles.adminContainer}>
      <div className="container">
        <div className={styles.header}>
          <h1>Admin Dashboard</h1>
          <p>Review contact form submissions</p>
        </div>

        {loading ? (
          <p>Loading submissions...</p>
        ) : submissions.length === 0 ? (
          <div className={styles.emptyState}>No messages yet.</div>
        ) : (
          <div className={styles.submissionsGrid}>
            {submissions.map((sub) => (
              <div key={sub._id} className={styles.submissionCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.fieldGroup}>
                    <span className={styles.label}>Subject:</span>
                    <h3>{sub.subject}</h3>
                  </div>
                  <div className={styles.headerRight}>
                    <span className={styles.date}>{new Date(sub.createdAt).toLocaleString()}</span>
                    <button onClick={() => handleDelete(sub._id)} className={styles.deleteBtn} title="Delete message">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <div className={styles.senderInfo}>
                  <div className={styles.fieldGroup}>
                    <span className={styles.label}>Name:</span>
                    <strong>{sub.name}</strong>
                  </div>
                  <div className={styles.fieldGroup}>
                    <span className={styles.label}>Email:</span>
                    <span>{sub.email}</span>
                  </div>
                </div>
                <div className={styles.messageSection}>
                  <span className={styles.label}>Message:</span>
                  <p className={styles.message}>{sub.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
