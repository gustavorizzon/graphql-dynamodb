const BaseService = require('./BaseService')

class HeroesService extends BaseService {
	constructor({ repository }) {
		super({ repository })
	}
}

module.exports = HeroesService
