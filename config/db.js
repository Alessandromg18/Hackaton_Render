// config/db.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configuración de Sequelize con PostgreSQL en Render
const sequelize = new Sequelize(
  process.env.DB_NAME,        // nombre de la base de datos
  process.env.DB_USER,        // usuario
  process.env.DB_PASSWORD,    // contraseña
  {
    host: process.env.DB_HOST, // host render
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false,
  }
);

module.exports = sequelize;
