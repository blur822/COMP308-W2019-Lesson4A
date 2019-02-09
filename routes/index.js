let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/About', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET products page. */
router.get('/Products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

/* GET services page. */
router.get('/Services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Contact page. */
router.get('/Contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});
module.exports = router;
