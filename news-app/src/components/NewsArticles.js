import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsArticles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/api/articles');
        setArticles(response.data);
      } catch (err) {
        setError('Failed to fetch articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/articles/${id}`);
      setArticles(articles.filter((article) => article._id !== id));
    } catch (err) {
      setError('Failed to delete the article. Please try again.');
    }
  };

  if (loading) return <p>Loading articles...</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>All News Articles</h1>
      {error && <p style={styles.error}>{error}</p>}
      {articles.length === 0 && !error ? (
        <p>No articles found. Add some news to get started!</p>
      ) : (
        <div style={styles.row}>
          {articles.map((article) => (
            <div style={styles.col} key={article._id}>
              <div style={styles.card}>
                <img
                  src={article.urlToImage || 'https://via.placeholder.com/150'}
                  style={styles.cardImgTop}
                  alt={article.title || 'News Image'}
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
                />
                <div style={styles.cardBody}>
                  <h5 style={styles.cardTitle}>{article.title}</h5>
                  <p style={styles.cardText}>{article.description}</p>
                  <div style={styles.btnContainer}>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.readMoreBtn}
                    >
                      Read More
                    </a>
                    <button
                      style={styles.btnDelete}
                      onClick={() => handleDelete(article._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    marginTop: '40px',
    padding: '0 20px',
  },
  title: {
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '2rem',
    color: '#333',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  col: {
    flex: '1 1 300px',
    maxWidth: '300px',
    margin: '10px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  cardImgTop: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    padding: '15px',
    flexGrow: '1',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '1rem',
    marginBottom: '20px',
    color: '#555',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  readMoreBtn: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  btnDelete: {
    backgroundColor: '#dc3545',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default NewsArticles;