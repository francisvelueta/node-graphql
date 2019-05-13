const graphHttp = require('express-graphql');
const schemaUser = require('./schema/user');
const valueUser = require('./resolvers/user');

module.exports = graphHttp({
    schema: schemaUser,
    rootValue: valueUser,
    graphiql: true
});



