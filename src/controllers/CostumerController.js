const { set, get, del } = require("../redis");
const { v4: uuidv4 } = require('uuid');

exports.post = (req, res, next) =>{
  const { name, email, document } = req.body;
  
  const costumer = {
      id: uuidv4(),
      name: name,
      email: email,
      document : document
  }
  set(costumer.id,costumer)
    
  res.json({ costumer });
}

exports.postCollection = (req, res, next) =>{
const costumers = req.body;
const collection = new Array();

for (let i = 0; i < costumers.length; i++){
    const id =  uuidv4();
    const name = costumers[i].name;
    const email = costumers[i].email;
    const document = costumers[i].document;
    
    const costumer = {name, email, document}
    collection[i] = {id, costumer}
    set(id, costumer);
}

res.json({ collection });

}

exports.get = async function (req, res, next) {
  const { id } = req.params;
  const costumers = await get(id);
  
  if (!costumers) return res.status(204).json();

  res.json(costumers);
}

exports.put = (req, res, next) => {
  const { id } = req.params;
  const costumer = get(id);

  if (!costumer) return res.status(204).json();

  const { name, email, document } = req.body;
  costumer.id = id;
  costumer.name = name;
  costumer.email = email;
  costumer.document = document;

  set(costumer.id,costumer)

  res.json(costumer);
}

exports.delete = (req, res, next) => {
  const { id } = req.params;
  const costumersFiltered = del(id);
    
  res.json(costumersFiltered);
}