const CostumerController = require('../controllers/CostumerController');
const cors =  require('cors');

module.exports = (app) => {
    app.use(cors());
    app.post('/costumers', cors(), CostumerController.post);
    app.get('/costumers/:id', cors(), CostumerController.get);
    app.put('/costumers/:id', cors(), CostumerController.put);
    app.delete('/costumers/:id', cors(), CostumerController.delete);
}
