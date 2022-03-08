const BaseRepository = require('./BaseRepository');
const schema = require('./schemas/SkillSchema');

class SkillsRepository extends BaseRepository {
	constructor() {
		super({ schema })
	}
}

module.exports = SkillsRepository
