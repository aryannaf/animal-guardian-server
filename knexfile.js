const connections = {
  // development: {
    // client: 'mysql',
    // connection: {
    //   host: '127.0.0.1',
    //   user: 'root',
    //   password: 'rootroot',
    //   database: 'endangered_species',
    //   charset: 'utf8',
    // },
  // },
  // production: {
    client: 'mysql',
    connection: process.env.JAWSDB_URL,
  // }
};

module.exports = connections;
  