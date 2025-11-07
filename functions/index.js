const functions = require("firebase-functions");
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

// Habilitar CORS para cualquier origen
app.use(cors({ origin: true }));

// Ruta para obtener juegos gratuitos
app.get("/games", async (req, res) => {
  try {
    const response = await axios.get("https://www.freetogame.com/api/games");
    res.json(response.data);
  } catch (err) {
    console.error("Error al obtener juegos FreeToGame:", err.message);
    res.status(500).json({ error: "Error al obtener juegos" });
  }
});

// Exportar la función HTTP
exports.api = functions.https.onRequest(app);


