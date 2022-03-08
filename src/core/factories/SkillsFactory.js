const SkillsRepository = require('../repositories/SkillsRepository')
const SkillsService = require('../services/SkillsService')

async function createInstance() {
	const repository = new SkillsRepository();
	const service = new SkillsService({ repository });

	return service;
}

module.exports = { createInstance }
