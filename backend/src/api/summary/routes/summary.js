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
  },
});
