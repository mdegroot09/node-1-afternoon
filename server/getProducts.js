const products = require('../products.json')

let getProducts = (req,res) => {
  let product;
  
  if(!req.query.price){
    return res.status(200).send(products)
  } else {
    product = products.find(product => {
      return product.price == Number(req.query.price)
    })
    if (product){
      res.status(200).send(product)
    } else {
      res.status(500).send('No products matched your query')
    }
  }
}

module.exports = getProducts