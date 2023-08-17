'use strict';

/**
 * camione service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::camione.camione');
