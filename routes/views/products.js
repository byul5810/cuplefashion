const keystone = require('keystone')

exports = module.exports = (req, res) => {
  const view = new keystone.View(req, res)
  const locals = res.locals

  // Set menu in navbar
  // section will be used in "default.hbs" for comparing with
  // navlink key and if they the same then navlink shows active effect
  locals.section = 'products'

  // 'products' is saved as 'locals.products'
  // so it can be used in template/view file
  // locals.products contains data set queried by below line
  view.query('products', keystone.list('Product').model.find())

  // Load products
  view.render('products')
}