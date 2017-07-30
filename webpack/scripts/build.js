'use strict';

process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const config = require('../config/webpack.config.prod');
const chalk = require('chalk');

const compiler = webpack(config);

compiler.run((err, stats) => {
  if (err) {
    console.log(chalk.red(`compiler run error: ${err} ${stats}\n`));
  } else {
    //console.log(stats);
  }
});