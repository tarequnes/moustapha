const express = require("express");

const app = express();
const PORT = 3000;

app.get("/api/status", (req, res) => {
    res.json({
        message: "Application GreenFood fonctionne"
    });
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});