"use strict";

const authStrategy = require("./auth-strategies");

module.exports = ({ strapi }) => {
  strapi.container.get("auth").register("content-api", authStrategy);

  if (strapi.plugin("graphql")) {
    require("@strapi/plugin-users-permissions/server/graphql")({ strapi });
  }
};
