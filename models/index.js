const User = require("./User")
const Games = require("./Games")
const Genre = require("./Genre")

// User
User.hasMany(Games, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

// Games
Games.belongsTo(User, {
  foreignKey: 'user_id'
});

Games.belongsTo(Genre, {
    foreignKey: "genre_id"
})

// Genre
Genre.hasMany(Games, {
    foreignKey: "game_id"
})

module.exports = {User, Games, Genre}