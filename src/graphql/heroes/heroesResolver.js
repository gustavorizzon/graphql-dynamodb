const resolvers = {
	// GET
	Query: {
		async getHeroes(root, args, context, info) {
			return 'Hello world'
		}
	},
	// POST (atualizaões, cadastro, remoção)
	Mutation: {
		async createHero(root, args, context, info) {
			return 'Created Hero'
		}
	}
}

module.exports = resolvers
