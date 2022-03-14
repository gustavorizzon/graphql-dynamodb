'use strict';

const { ApolloServer, gql } = require('apollo-server-lambda');

const setupDynamoDBClient = require('./src/core/utils/setupDynamoDB')
const dynamoDbClient = setupDynamoDBClient();

const HeroesFactory = require('./src/core/factories/HeroesFactory')
const SkillsFactory = require('./src/core/factories/SkillsFactory')

const schema = require('./src/graphql');

const isLocal = process.env.IS_LOCAL === 'true';

const server = new ApolloServer({
  schema,
	context: async () => ({
		Heroes: await HeroesFactory.createInstance(),
		Skills: await SkillsFactory.createInstance(),
	}),
	introspection: isLocal,
  formatError(error) {
		console.error('[Global Error Logger]', error);

		return error;
	},
	formatResponse(response) {
		console.log('[Global Error]', response);

		return response;
	}
});

exports.handler = server.createHandler({
  expressGetMiddlewareOptions: {
    cors: {
      origin: '*',
    }
  },
});

// async function main() {
// 	console.log('starting factories...')

// 	const skillsService = await SkillsFactory.createInstance();

// 	console.log('inserting skill item..');
// 	const skillId = `${Date.now()}`;
// 	await skillsService.create({
// 		id: skillId,
// 		name: 'mage',
// 		value: 50,
// 	});

// 	console.log('getting skill item...');
// 	const skillItem = await skillsService.findOne(skillId);
// 	console.log('skill item', skillItem);

// 	const allSkills = await skillsService.findAll();
// 	console.log('all skills', allSkills);

// 	console.log('\n-----------------------------\n');

// 	const heroesService = await HeroesFactory.createInstance();

// 	console.log('inserting skill item..');
// 	const heroId = `${Date.now()}`;
// 	await heroesService.create({
// 		id: heroId,
// 		name: 'mage',
// 		skills: [skillId]
// 	});

// 	console.log('getting hero item...');
// 	const heroItem = await heroesService.findOne(heroId);
// 	console.log('hero item', heroItem);

// 	const allHeroes = await heroesService.findAll();
// 	console.log('all heroes', allHeroes);


// 	return {
// 		statusCode: 200,
// 		body: JSON.stringify({
// 			heroes: {
// 				heroItem,
// 				allHeroes
// 			},
// 			skills: {
// 				skillItem,
// 				allSkills
// 			}
// 		})
// 	}
// }

// module.exports.test = main
