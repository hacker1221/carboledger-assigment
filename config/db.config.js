module.exports = {
    HOST: process.env.DB_HOST || "127.0.0.1",
    PORT: process.env.DB_PORT || 5432,
    USER: process.env.DB_USER || "postgres",
    PASSWORD: process.env.DB_PASSWORD || "password",
    DB: process.env.DB_NAME || "postgres",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};