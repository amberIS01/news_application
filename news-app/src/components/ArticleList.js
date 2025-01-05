// src/components/ArticleList.js
import React from "react";

const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article._id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{article.headline}</h5>
            <p className="card-text">{article.description}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
