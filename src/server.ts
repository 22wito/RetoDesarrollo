import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import type { RowDataPacket } from 'mysql2';
import pool from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

interface Piloto extends RowDataPacket {
  nombre: string;
  puntos: number;
  escuderia: string;
  pole: number;
}

// 1. Ruta principal que sirve el index.html manualmente
app.get('/', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'));
});

// 2. Middleware para parsear JSON en las peticiones (si fuera necesario)
app.use(express.json());

// 3. Ruta de datos puros (Solo envía JSON)
app.get('/api/datos', async (req, res) => {
  try {
    const [rows] = await pool.query<Piloto[]>(
      'SELECT * FROM mundialpilotos ORDER BY points DESC'
    );

    // res.json() se encarga de formatear el objeto y enviarlo con los cabeceros correctos (application/json)
    res.json(rows);
  } catch (error) {
    console.error('Error al consultar la DB:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});