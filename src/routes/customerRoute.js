const CustomerController = require('../controllers/customerController');
const cors =  require('cors');
const validateDto = require('../middleware/validate-dto');
const customerSchema = require('../schema/customer');
const customerCollectionSchema = require('../schema/customersCollection');

module.exports = (app) => {
    app.use(cors());
    app.post('/customers', cors(), validateDto(customerSchema), CustomerController.post);
    app.get('/customers/:id', cors(), CustomerController.get);
    app.put('/customers/:id', cors(), validateDto(customerSchema), CustomerController.put);
    app.delete('/customers/:id', cors(), CustomerController.delete);

    app.post('/customers/collection', cors(), validateDto(customerCollectionSchema), CustomerController.postCollection);
}
