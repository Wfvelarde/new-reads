var database = require("./database-connection")

module.exports = {
	getBooks: function(){
		return database("book").select("*");
	}
}