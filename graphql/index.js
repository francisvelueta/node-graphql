const graphHttp = require('express-graphql');
const schemaEvent = require('./schema/event');
const valueEvent = require('./resolvers/event');

module.exports = graphHttp({
    schema:  schemaEvent ,
    rootValue: valueEvent,
    graphiql: true
});



