const ajvInstance = require('./ajv-instance');

const schema = {
    type: 'object',
    properties:{
        name: {type: 'string'},
        email: {type: 'string', format: 'email'},
        document: {type: 'number'}
    },
    required: ['name', 'email', 'document'],
    additionalProperties:false,
};

module.exports = ajvInstance.compile(schema);