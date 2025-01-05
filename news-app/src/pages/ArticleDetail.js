import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App'; // Import the CSS file

const ArticleDetail = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const [article, setArticle] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/articles/${id}`); // Use the ID to fetch the specific article
        setArticle(response.data);
      } catch (err) {
        console.error("Error fetching article details:", err);
        setError("Error fetching article details");
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]); // Re-fetch article when ID changes

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!article) {
    return <p>No article details available</p>;
  }

  return (
    <div className="article-detail container mt-4">
      <h1 className="article-title">{article.title}</h1>
      {article.urlToImage && <img className="article-image" src={article.urlToImage} alt={article.title} />}
      <p className="article-content">{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        Read Original Article
      </a>
    </div>
  );
};

export default ArticleDetail;