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
  const limit = 20;
  Article.count(query)
    .then((count) => {
      console.log(21, count);
      if (count > 0) {
        Article.find(query)
          .limit(limit)
          .sort({createdAt: 'desc'})
          .populate('author')
          .exec((error, docs) => {
            if (error) {
              res.json({
                error: error.message
              });
            } else {
              res.json({
                total: count,
                articles: docs.map(article => article.toJSONFor(article.author))
              });
            }
          });
      } else {
        res.json({
          total: count,
          articles: []
        });
      }
  });
});

module.exports = router;
