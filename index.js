// Jonathan Jeanson, le 11 septembre 2024
// Mon premier serveur web utilisant Express

const express = require("express");
const mongoose = require("mongoose");

const app = express();


// Pour aller chercher les données dans le cluster de mongoDB
mongoose.connect(
	"mongodb+srv://dbCLG:VI1nxd5R3Qy0pcj4IZFe@cluster0.ub8r2.mongodb.net/labo1"
);

// Pour aller chercher les données dans la DB de mongoDB en local
/* mongoose.connect(
	"mongodb://127.0.0.1:27017/labo01"
); */

const Livres = require("./modeles/Livres");

app.use(express.json());

const db = mongoose.connection;
db.on("error", (err) => {
	console.error("erreur de BD", erreur);
});

db.once("open", () => {
	console.log("connection a la bd OK");
});

app.get("/", (requete, reponse) => {
	reponse.send("uttilisez /api/livres pour faire appel au service web");
});

app.get("/api/livres", (requete, reponse) => {
	Livres.getLivres((err, livres) => {
		if (err) throw err;
		reponse.json(livres);
	}, 2);
});

app.listen(8000);
console.log("Sevice Web fonctionnel sur le port 8000");

// Pour faire l'appel par le naviguateur, http://localhost:8000/api/livres ou http://127.0.0.1:8000/api/livres