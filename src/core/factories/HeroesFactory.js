const HeroesRepository = require('../repositories/HeroesRepository')
const HeroesService = require('../services/HeroesService')

async function createInstance() {
	const repository = new HeroesRepository();
	const service = new HeroesService({ repository });

	return service;
}

module.exports = { createInstance }
