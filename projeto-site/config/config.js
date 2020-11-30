module.exports = {
  production: {
    username: 'masnempeixe', // username do meu banco de dados no Azure
    password: '#Gf41112983899', // senha do meu banco de dados no Azure
    database: 'masnempeixe', // banco de dados no Azure
    host: 'masnempeixe.database.windows.net', // host do meu banco de dados no Azure
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
