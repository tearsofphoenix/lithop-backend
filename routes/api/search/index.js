import mongoose from 'mongoose';
const router = require('express').Router();
const Article = mongoose.model('Article');
const Comment = mongoose.model('Comment');

// return a list of tags
router.get('/', function(req, res, next) {
  const {q} = req.query;
  const exp = new RegExp(q, 'i');
    const query = {
      $or: [
        {slug: exp},
        {title: exp},
        {description: exp},
        {body: exp}
      ]
    };
  Article.find(query)
    .sort({createdAt: 'desc'})
    .populate('author')
    .exec((error, docs) => {
      if (error) {
        res.json({
          error: error.message
        });
      } else {
        res.json({
          articles: docs.map(article => article.toJSONFor(article.author))
        });
      }
    });
});

module.exports = router;
