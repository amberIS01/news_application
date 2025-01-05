import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddArticle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [urlToImage, setUrlToImage] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleAddArticle = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      setError('Title and description are required.');
      return;
    }

    try {
      const newArticle = {
        title,
        description,
        urlToImage,
        url,
      };

      await axios.post('/api/articles', newArticle);
      setSuccess('Article added successfully!');
      setError('');
      
      // Delay the redirect by 3 seconds to show the success message
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (err) {
      console.error('Error adding article:', err);
      setError('Failed to add the article. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '600px',
        margin: '30px auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Add a New Article</h1>

      {error && <p style={{ color: 'red', marginBottom: '20px' }}>{error}</p>}
      {success && <p style={{ color: 'green', marginBottom: '20px', fontWeight: 'bold' }}>{success}</p>}

      <form onSubmit={handleAddArticle}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter article title"
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter article description"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              height: '100px',
              resize: 'vertical',
            }}
          ></textarea>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Image URL:</label>
          <input
            type="text"
            value={urlToImage}
            onChange={(e) => setUrlToImage(e.target.value)}
            placeholder="Enter image URL (optional)"
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Article URL:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter article URL (optional)"
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#007bff',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Add Article
        </button>
      </form>
    </div>
  );
};

export default AddArticle;
