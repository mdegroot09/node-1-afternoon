const products = require('../products.json')

let getProduct = (req,res) => {
  console.log('req.query:',req.query)
  console.log('req.params:',Number(req.params.id))
  const item = products.find(val => val.id === Number(req.params.id))
  if(item){
    return res.status(200).send(item)
  } else {
    return res.status(500).send('Item not in list')
  }
}

module.exports = getProduct