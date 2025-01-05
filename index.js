const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const News = require('./models/article'); // Adjust the path as necessary

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB URI
const MONGODB_URI = "mongodb://127.0.0.1:27017/newsDB";

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from the React frontend
  methods: ['GET', 'POST', 'DELETE'], // Specify allowed methods
}));

// MongoDB Connection
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes

// POST a new article
app.post('/api/articles', async (req, res) => {
  const article = new News({
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    urlToImage: req.body.urlToImage
  });

  try {
    const newArticle = await article.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET all articles
app.get('/api/articles', async (req, res) => {
  try {
    const articles = await News.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single article by ID
app.get('/api/articles/:id', async (req, res) => {
  try {
    const article = await News.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE an article by ID
app.delete('/api/articles/:id', async (req, res) => {
  try {
    const result = await News.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Serve Static Files from React Frontend in Production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Start the Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

module.exports = app;