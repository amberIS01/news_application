// src/components/ArticleForm.js
import React from "react";

const ArticleForm = ({ article, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="article-form">
      <div className="mb-3">
        <label className="form-label" htmlFor="headline">Headline</label>
        <input
          type="text"
          className="form-control"
          id="headline"
          name="headline"
          value={article.headline}
          onChange={handleChange}
          placeholder="Enter the headline"
          required
        />
        <div className="form-text">A catchy headline for your article.</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={article.description}
          onChange={handleChange}
          placeholder="Enter a brief description of the article"
          rows="4"
          required
        ></textarea>
        <div className="form-text">Provide a brief summary or introduction.</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="link">Link</label>
        <input
          type="url"
          className="form-control"
          id="link"
          name="link"
          value={article.link}
          onChange={handleChange}
          placeholder="Enter the link to the full article"
          required
        />
        <div className="form-text">URL to the full article.</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="img">Image URL</label>
        <input
          type="url"
          className="form-control"
          id="img"
          name="img"
          value={article.img}
          onChange={handleChange}
          placeholder="Enter the URL of the image"
        />
        <div className="form-text">URL to an image associated with the article (optional).</div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ArticleForm;