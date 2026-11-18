require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.get("/", (req, res) => {
  res.send("Backend de consulta de videojuegos funcionando.");
});

app.get("/api/productos", async (req, res) => {
  try {
    const consulta = `
      SELECT
          p.producto_id,
          p.nombre,
          p.descripcion,
          p.precio,
          c.nombre AS categoria
      FROM demo_productos AS p
      INNER JOIN demo_categorias AS c
          ON p.categoria_id = c.categoria_id
      ORDER BY p.nombre;
    `;
    const [filas] = await pool.query(consulta);
    res.json(filas);
  } catch (error) {
    console.error("Error al consultar videojuegos:", error.message);
    res.status(500).json({ mensaje: "Error al consultar la base de datos." });
  }
});

app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto " + PORT);
});