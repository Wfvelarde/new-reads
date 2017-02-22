
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE book RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('book').insert([{
        name: "Memoirs of a Geisha",
        pictureUrl: "http://images.gr-assets.com/books/1409595968l/929.jpg",
        author: "Arthur Golden"
      },{
        name: "The Historian",
        pictureUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Historiancover.jpg/220px-Historiancover.jpg",
        author: "Elizabeth Kostova"
      },{
        name: "The Alchemist",
        pictureUrl: "https://images-na.ssl-images-amazon.com/images/I/41ybG235TcL._SX329_BO1,204,203,200_.jpg",
        author: "Paulo Coelho"
    }]);
  });
};
