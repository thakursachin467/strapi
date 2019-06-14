const knex = require('knex');
const createTable = require('../create-table');

describe('Create Table', () => {
  test('That works', () => {
    return createTable(
      {
        collectionName: 'something',
        attributes: {
          title: {
            type: 'string',
            required: true, // not nullable
            unique: true, // or [args]
            index: true, // or [args]
          },
        },
      },
      {
        knex: knex({
          client: 'sqlite',
          connection: {
            filename: './mydb.sqlite',
          },
          useNullAsDefault: true,
        }),
      }
    );
  });
});
