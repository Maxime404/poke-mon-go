const mongoose = require('mongoose');
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', () => {
    console.log(chalk.red('Connection error'));
});
db.once('open', () => {
    console.log(chalk.green('Connected successfuly !'));
});