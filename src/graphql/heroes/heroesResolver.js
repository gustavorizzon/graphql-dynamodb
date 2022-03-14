const resolvers = {
	Hero: {
		async skills(root, args, context, info) {
			const skills = root.skills.map(skill => context.Skills.findOne(skill))

			const results = await Promise.all(skills);

			const all = results.reduce((prev, next) => prev.concat(next), []);

			return all
		}
	},
	// GET
	Query: {
		async getHeroes(root, args, context, info) {
			return context.Heroes.findAll(args);
		}
	},
	// POST (atualizaões, cadastro, remoção)
	Mutation: {
		async createHero(root, args, context, info) {
			const { id } = await context.Heroes.create(args);

			return id;
		}
	}
}

module.exports = resolvers
