module.exports = {
  production: {
    username: 'masnempeixe',
    password: '#Gf41112983899',
    database: 'masnempeixe',
    host: 'masnempeixe.database.windows.net',
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
 
