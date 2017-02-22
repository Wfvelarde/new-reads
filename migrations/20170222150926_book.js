
exports.up = function(knex, Promise) {
  return knex.schema.createTable("book", function(book){
  	book.increments();
  	book.string("name");
  	book.string("author");
  	book.string("pictureUrl");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("book")
};
