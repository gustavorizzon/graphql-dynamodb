const BaseRepository = require('./BaseRepository');
const schema = require('./schemas/HeroSchema');

class HeroesRepository extends BaseRepository {
	constructor() {
		super({ schema })
	}
}

module.exports = HeroesRepository
