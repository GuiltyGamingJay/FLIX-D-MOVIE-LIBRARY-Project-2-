const sequelize = require('../config/connection');
const { User, Games, Genre } = require('../models');

// const userData = require('./userData.json');
// const projectData = require('./projectData.json');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Games.create(
    {
      name: "Hades",
    }
  );

  await Genre.create(
    {
      name: "rogue-like",
    }
  );

  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // for (const project of projectData) {
  //   await Games.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();