'use strict';

/**
 * Module dependencies
 */

// Core
const path = require('path');

// Public node modules.
const _ = require('lodash');
const bookshelf = require('bookshelf');

// Local helpers.
const relations = require('./relations');
const buildQuery = require('./buildQuery');
const mountModels = require('./mount-models');
const getQueryParams = require('./get-query-params');
const createDefaults = require('./create-defaults');

/**
 * Bookshelf hook
 */

/**
 * Default options
 */

const defaults = {
  defaultConnection: 'default',
  host: 'localhost',
};

module.exports = function(strapi) {
  function initialize(cb) {
    const GLOBALS = {};
    const databaseUpdates = [];
    const connections = _.pickBy(
      strapi.config.connections,
      ({ connector }) => connector === 'strapi-hook-bookshelf'
    );

    _.forEach(connections, (connection, connectionName) => {
      // Apply defaults
      _.defaults(connection.settings, strapi.config.hook.settings.bookshelf);

      // Create Bookshelf instance for this connection.
      const ORM = new bookshelf(strapi.connections[connectionName]);

      try {
        // Require `config/functions/bookshelf.js` file to customize connection.
        require(path.resolve(
          strapi.config.appPath,
          'config',
          'functions',
          'bookshelf.js'
        ))(ORM, connection);
      } catch (err) {
        // This is not an error if the file is not found.
      }

      // Load plugins
      if (_.get(connection, 'options.plugins', true) !== false) {
        ORM.plugin('visibility');
        ORM.plugin('pagination');
      }

      const groupsModels = {};
      Object.keys(strapi.groups).forEach(groupKey => {
        const schema = strapi.groups[groupKey];

        // TODO: validate group schema in the core

        groupsModels[groupKey] = ORM.Model.extend({
          tableName: schema.collectionName,
          hasTimestamps: true,
          defaults: createDefaults(schema.attributes),
        });
      });

      const ctx = {
        GLOBALS,
        connection,
        databaseUpdates,
        ORM,
        groupsModels,
      };

      return Promise.all([
        mountApis(connectionName, ctx),
        mountAdmin(connectionName, ctx),
        mountPlugins(connectionName, ctx),
      ]).then(() => cb(), cb);
    });
  }

  function mountApis(connectionName, ctx) {
    const options = {
      models: _.pickBy(
        strapi.models,
        ({ connection }) => connection === connectionName
      ),
      target: strapi.models,
      plugin: false,
    };

    return mountModels(options, ctx);
  }

  function mountAdmin(connectionName, ctx) {
    const options = {
      models: _.pickBy(
        strapi.admin.models,
        ({ connection }) => connection === connectionName
      ),
      target: strapi.admin.models,
      plugin: false,
    };

    return mountModels(options, ctx);
  }

  function mountPlugins(connectionName, ctx) {
    return Promise.all(
      Object.keys(strapi.plugins).map(name => {
        const plugin = strapi.plugins[name];
        return mountModels(
          {
            models: _.pickBy(
              plugin.models,
              ({ connection }) => connection === connectionName
            ),
            target: plugin.models,
            plugin: name,
          },
          ctx
        );
      })
    );
  }

  return {
    defaults,
    initialize,
    getQueryParams,
    buildQuery,
    ...relations,
  };
};
