'use strict';

/**
 * summary router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::summary.summary', {
  config: {
    create: {
      middlewares: ["api::summary.on-summary-create"],
    },
    find: {
      middlewares: ["global::is-owner"],
    },
    findOne: {
      middlewares: ["global::is-owner"],
    },
    update: {
      middlewares: ["global::is-owner"],
    },
    delete: {
      middlewares: ["global::is-owner"],
    },
  },
});
