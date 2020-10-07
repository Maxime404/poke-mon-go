const mongoose = require('mongoose');
import dotenv from 'dotenv'
import chalk from 'chalk'

dotenv.config()

mongoose.connect(process.env.DATABASE_URI, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log( chalk.green("we are connected !"))
});

