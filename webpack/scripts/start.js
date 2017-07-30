'use strict';

process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const config = require('../config/webpack.config.dev');
const WebpackDevServer = require('webpack-dev-server');
const createDevServerConfig = require('../config/webpack-dev-server.config');
const chalk = require('chalk');

const compiler = webpack(config);

// compiler.watch({

// }, (err, stats) => {
//   console.log(err, stats);
// });
const devServerConfig = createDevServerConfig();
const devServer = new WebpackDevServer(compiler, devServerConfig);

devServer.listen(devServerConfig.port, devServerConfig.host, function () {
  console.log(chalk.cyan(`Starting the development server at ` +
    `${devServerConfig.host}:${devServerConfig.port}\n`));
});