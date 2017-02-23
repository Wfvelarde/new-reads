var express = require('express');
var router = express.Router();
var queries = require('../data/queries')

router.get('/', function(req, res, next) {
  queries.getBooks().then(function(books){
  	res.render('books', {
  		books: books
  	});
  }).catch(console.error)
});

router.get('/:id', function(req, res, next) {
	queries.getBook(req.params.id).then(function(book) {
		res.render('book', book);
	}).catch(console.error)
});

router.get('/new', function(req, res, next) {
	res.render('new-book');
});

router.get('/edit/:id', function(req, res, next) {
	queries.getBook(req.params.id).then(function(book){
		res.render('edit-book', book)
	}).catch(console.error)
});

router.put('/:id', function(req, res, next) {
	queries.editBook(req.params.id, req.body).then(function(){
		res.redirect('/books')
	}).catch(console.error)
});

router.post('/', function(req, res, next) {
	queries.addBook(req.body).then(function(){
		res.redirect('books');
	}).catch(console.error)
});

router.delete('/:id', function(req, res, next) {
	queries.deleteBook(req.params.id).then(function(){
		res.redirect('/books');
	}).catch(console.error)
});

module.exports = router;
