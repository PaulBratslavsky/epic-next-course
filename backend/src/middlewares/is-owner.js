"use strict";

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const entryId = ctx.params.id;
    const user = ctx.state.user;
    const userId = user?.id;

    console.log('entryId', entryId);
    console.log('user', user);
    console.log('userId', userId);

    if (!userId) return ctx.unauthorized(`You can't access this entry`);

    const apiName = ctx.state.route.info.apiName;

    function generateUID(apiName) {
      const apiUid = `api::${apiName}.${apiName}`;
      return apiUid;
    }

    const appUid = generateUID(apiName);

    if (entryId) {
      const entry = await strapi.entityService.findOne(appUid, entryId, {
        populate: "*",
      });

      if (entry && entry.user.id !== userId)
        return ctx.unauthorized(`You can't access this entry`);
    }

    if (!entryId) {
      ctx.query = {
        ...ctx.query,
        filters: { ...ctx.query.filters, user: userId },
      };
    }

    await next();
  };
};