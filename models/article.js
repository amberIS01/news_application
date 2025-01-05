const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  urlToImage: { type: String }
});

const News = mongoose.model('News', articleSchema);

module.exports = News;