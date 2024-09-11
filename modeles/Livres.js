// Jonathan Jeanson, le 11 septembre 2024
// Le modèle pour accéder àa la collection Livres
// de ma BD labo01

const mongoose = require("mongoose");

let schemaLivre = mongoose.Schema({
	_id: { type: String, require: true },
	titre: { type: String, require: true },
	auteur: { type: String, require: true },
	résumé: { type: String, require: true },
	éditeur: { type: String, require: true },
	nombre_de_pages: { type: Number, require: true },
	langue: { type: String, require: true },
	date: { type: String, require: true },
	prix: { type: Number, require: true },
});

let Livres = module.exports = mongoose.model('livres', schemaLivre);

// Méthodes pour accéder aux données ....

module.exports.getLivres = (callback, maxLivres) => {
    Livres.find(callback).limit(maxLivres);
};