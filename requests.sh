URL=http://localhost:3000/dev/graphql

curl $URL \
	-H 'Content-Type: application/json' \
	--data-binary '{"query":"{\n  getHeroes\n  getSkills\n}"}' \
	--compressed

curl $URL \
	-H 'Content-Type: application/json' \
	--data-binary '{"query":"mutation {\n  createHero\n  createSkill\n}"}' \
	--compressed
