// src/pages/Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleList from "../components/ArticleList";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchArticles = async () => {
      try {
        const response = await axios.get("/api/articles", { cancelToken: source.token });
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          console.error("Error fetching articles:", error);
          setError("Error fetching articles");
          setLoading(false);
        }
      }
    };
    fetchArticles();

    return () => {
      source.cancel("Component unmounted");
    };
  }, []);

  return (
    <div className="container mt-4">
      <h1>All News Articles</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && <ArticleList articles={articles} />}
    </div>
  );
};

export default Home;