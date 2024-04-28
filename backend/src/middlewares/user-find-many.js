"use strict";

/**
 * `user-find-many-owner` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In user-find-many-owner middleware.");

    const currentUserId = ctx.state?.user?.id;

    if (!currentUserId) {
      strapi.log.error("You are not authenticated.");
      return ctx.badRequest("You are not authenticated.");
    }

    ctx.query = {
      ...ctx.query,
      filters: { ...ctx.query.filters, id: currentUserId },
    };

    await next();
  };
};