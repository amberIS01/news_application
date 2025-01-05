import React from 'react';

const NewsArticleCard = ({ article }) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={article.urlToImage} className="card-img-top" alt={article.title} />
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsArticleCard;
