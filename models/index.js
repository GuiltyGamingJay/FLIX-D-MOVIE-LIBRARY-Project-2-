const User = require('./User');
const Games = require('./Games');
// const Genre = require('./Genre');
const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

User.hasMany(Games, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Games.belongsTo(User, {
  foreignKey: 'user_id'
});



// const GameGenres = sequelize.define('GameGenres', {
//   GameId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Games,
//       key: 'id'
//     }
//   },
//   GenreId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Genre,
//       key: 'id'
//     }
//   }
// });
// Games.belongsToMany(Genre, { through: GameGenres });
// Genre.belongsToMany(Games, { through: GameGenres });

// module.exports = { User, Games, Genre };

module.exports = { User, Games };