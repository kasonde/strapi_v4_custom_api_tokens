const register = require("./register");

module.exports = (plugin) => {
  plugin.register = register;
  return plugin;
};
