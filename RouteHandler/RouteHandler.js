const RouteHandler = require('express').Router();

RouteHandler.get('/', (req, res) => {
  const data = {
    name: 'Sparsh Kumar',
    email: 'sparsh@gmail.com'
  };
  return res.status(200).send({
    status: 'success',
    data
  })
});


RouteHandler.patch('/', (req, res) => {
  console.log(req.body);
  return res.status(200).send({
    status: 'success',
  })
});


module.exports = {
  RouteHandler
};

