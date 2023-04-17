const connection = require('../config/connection');
const { User, Thoughts } = require('../models');
const { userData, thoughtsData } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thoughts.deleteMany({});
    await User.deleteMany({});

    const users = userData;
    const thoughts = thoughtsData;

    await User.collection.insertMany(users);
    await Thoughts.collection.insertMany(thoughts);
    // Update users with the thoughts ids
    // loop through the saved thought, for each thought we need to generate a thought reaction and insert the thought reactions.
    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete!');
    process.exit(0);
});