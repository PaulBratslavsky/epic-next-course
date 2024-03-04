'use strict';

/**
 * home-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-page.home-page');
