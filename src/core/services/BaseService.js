const { randomUUID } = require('crypto');

class BaseService {
	constructor({ repository }) {
		this.repository = repository
	}

	async create(item) {
		return this.repository.create({
			id: randomUUID(),
			...item
		})
	}

	async findOne(id) {
		return this.repository.findOne(id)
	}

	async findAll(query) {
		return this.repository.findAll(query)
	}
}

module.exports = BaseService
