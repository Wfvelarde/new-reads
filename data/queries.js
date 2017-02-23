var database = require("./database-connection")

module.exports = {
	getBooks: function(){
		return database("book").select("*");
	},

	getBook: function(id){
		return database("book").first().select("*").where("id", id);
	},

	addBook: function(book){
		return database("book").insert(book);
	},

	deleteBook: function(id){
		return database("book").delete().where("id", id);
	},

	editBook: function(id, book){
		return database("book").update(book).where("id", id);
	}
}