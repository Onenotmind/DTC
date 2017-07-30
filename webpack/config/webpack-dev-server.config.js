module.exports = function () {
  return {
    compress: true,
    port: 8080,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    hot: true,
  };
};