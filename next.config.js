// next.config.js
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['react-spring']);

module.exports = withPlugins([
  [withTM],
]);
