const CustomerController = require('../controllers/customerController');
const cors =  require('cors');
const validateDto = require('../middleware/validate-dto');
const userSchema = require('../schema/customer');

module.exports = (app) => {
    app.use(cors());
    app.post('/customers', cors(), validateDto(userSchema), CustomerController.post);
    app.post('/customers/collection', cors(), CustomerController.postCollection);
    app.get('/customers/:id', cors(), CustomerController.get);
    app.put('/customers/:id', cors(), validateDto(userSchema), CustomerController.put);
    app.delete('/customers/:id', cors(), CustomerController.delete);

    
}
