const dynamoose = require('dynamoose')

function setupDynamoDBClient() {
	if (!process.env.IS_LOCAL) {
		return dynamoose.local();
	}

	const host = process.env.LOCALSTACK_HOST;
	const port = process.env.DYNAMODB_PORT;

	console.log('running dynamodb locally!', host, port);

	return dynamoose.aws.ddb.local(`http://${host}:${port}`)
}

module.exports = setupDynamoDBClient;
