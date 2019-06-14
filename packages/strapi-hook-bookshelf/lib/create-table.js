const createTable = ({ name, attributes }, { knex, client }) => {
  return knex.schema.createTable(name, table => {
    Object.keys(attributes).forEach(createColumn({ table, client }));
  });
};

const createColumn = ({ table, client }) => attribute => {
  const { type } = attribute;

  switch (type) {
    case 'uuid':
      return client === 'pg' ? 'uuid' : 'varchar(36)';
    case 'text':
      return client === 'pg' ? 'text' : 'longtext';
    case 'json':
      return client === 'pg' ? 'jsonb' : 'longtext';
    case 'string':
    case 'enumeration':
    case 'password':
    case 'email':
      return 'varchar(255)';
    case 'integer':
      return client === 'pg' ? 'integer' : 'int';
    case 'biginteger':
      return client === 'pg' ? 'bigint' : 'bigint(53)';
    case 'float':
      return client === 'pg' ? 'double precision' : 'double';
    case 'decimal':
      return 'decimal(10,2)';
    case 'date':
    case 'time':
    case 'datetime':
    case 'timestamp':
      if (client === 'pg') {
        return 'timestamp with time zone';
      } else if (client === 'sqlite3' && tableExists) {
        return 'timestamp DEFAULT NULL';
      }
      return 'timestamp DEFAULT CURRENT_TIMESTAMP';
    case 'timestampUpdate':
      switch (client) {
        case 'pg':
          return 'timestamp with time zone';
        case 'sqlite3':
          return 'timestamp DEFAULT CURRENT_TIMESTAMP';
        default:
          return 'timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP';
      }
    case 'boolean':
      return 'boolean';
    default:
  }
};

module.exports = createTable;
