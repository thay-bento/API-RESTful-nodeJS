const { set, get, del } = require("../redis");
const { v4: uuidv4 } = require('uuid');

exports.post = (req, res, next) =>{
  const { name, email, document } = req.body;
 
  const customer = {
      id: uuidv4(),
      name: name,
      email: email,
      document : document
  }
  
  set(customer.id,customer)
  res.json( customer); 
  
}

exports.postCollection = (req, res, next) =>{
const customers = req.body;
const collection = new Array();

for (let i = 0; i < customers.length; i++){
  const id =  uuidv4();
  const name = customers[i].name;
  const email = customers[i].email;
  const document = customers[i].document;
    
  const customer = {id, name, email, document}
    
  set(id, customer);
  collection.push(customer) 
}

res.json({ collection });
}

exports.get = async function (req, res, next) {
  const { id } = req.params;
  const customers = await get(id);
  
  if (!customers) return res.status(204).json();

  res.json(customers);
}

exports.put = (req, res, next) => {
  const { id } = req.params;
  const customer = get(id);

  if (!customer) return res.status(204).json();

  const { name, email, document } = req.body;
  customer.id = id;
  customer.name = name;
  customer.email = email;
  customer.document = document;
  
  set(customer.id,customer)

  res.json( customer); 
}

exports.delete = (req, res, next) => {
  const { id } = req.params;
  const customersFiltered = del(id);
    
  res.json(customersFiltered);
}
