const resolvers = {
	// GET
	Query: {
		async getSkills(root, args, context, info) {
			return context.Skills.findAll(args);
		}
	},
	// POST (atualizaões, cadastro, remoção)
	Mutation: {
		async createSkill(root, args, context, info) {
			const { id } = await context.Skills.create(args);

			return id;
		}
	}
}

module.exports = resolvers
