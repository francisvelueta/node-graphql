const { buildSchema } = require('graphql');

module.exports = {
    // rootValue Events
    events: () => {
       return ['Game of Thrones', 'After', 'Sailing', 'Hola mundo'];
    },
    createEvent: (args) => {
        const eventName = args.name;
        return eventName;
    }
}