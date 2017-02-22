var express = require('express');
var router = express.Router();
var queries = require('../data/queries')

router.get('/', function(req, res, next) {
  queries.getBooks().then(function(books){
  	res.render("books", {
  		books: books
  	});
  }).catch(console.error)
});

module.exports = router;
