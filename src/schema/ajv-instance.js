const  Ajv = require('ajv');
const addFortmats = require('ajv-formats');

const ajvInstance = new Ajv({ allErrors: true });
addFortmats(ajvInstance);

module.exports = ajvInstance;