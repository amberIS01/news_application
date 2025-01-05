import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = ['Business', 'Technology', 'Sports', 'Health', 'Entertainment', 'Science'];

  return (
    <div className="container mt-5">
      <h1>News Categories</h1>
      <div className="list-group">
        {categories.map((category, index) => (
          <Link
            to={`/category/${category.toLowerCase()}`}
            key={index}
            className="list-group-item list-group-item-action"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
