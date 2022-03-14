const resolvers = {
	// GET
	Query: {
		async getSkills(root, args, context, info) {
			return 'Hello world'
		}
	},
	// POST (atualizaões, cadastro, remoção)
	Mutation: {
		async createSkill(root, args, context, info) {
			return 'Created skill'
		}
	}
}

module.exports = resolvers
