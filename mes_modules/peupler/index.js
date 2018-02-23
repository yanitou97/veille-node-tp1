"use strict";

const tableau = require("./tableau.js");

const maxNom = tableau.tabNom.length;
const maxPrenom = tableau.tabPrenom.length;
const maxTelephone = tableau.tabTelephone.length;
const maxCourriel = tableau.tabCourriel.length;
const maxVille = tableau.tabVille.length;
const maxEmploi = tableau.tabEmploi.length;
const maxLoisir = tableau.tabLoisir.length;


const peupler = () => {
	console.log("ok");
	let collection = [];
	for (let i=0;i<10;i++){
		let positionN = Math.floor(Math.random()*maxNom);
		let nom = tableau.tabNom[positionN];

		let positionP = Math.floor(Math.random()*maxPrenom);
		let prenom = tableau.tabPrenom[positionP];

		let positionT = Math.floor(Math.random()*maxTelephone);
		let telephone = tableau.tabTelephone[positionT];

		let positionC = Math.floor(Math.random()*maxCourriel);
		let courriel = tableau.tabCourriel[positionC];

		let positionV = Math.floor(Math.random()*maxVille);
		let ville = tableau.tabVille[positionV];

		let positionE = Math.floor(Math.random()*maxEmploi);
		let emploi = tableau.tabEmploi[positionE];

		let positionL = Math.floor(Math.random()*maxLoisir);
		let loisir = tableau.tabLoisir[positionL];

		collection.push({
			loisir : loisir,
			emploi : emploi,
			ville : ville,
			courriel : prenom+nom+courriel,
			telephone : telephone,
			prenom : prenom,
			nom : nom
		})
	}
	return collection;
}

module.exports = peupler;