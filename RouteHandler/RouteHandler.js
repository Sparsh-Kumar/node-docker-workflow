const path = require('path');
const UserAccount = require(path.resolve(__dirname, '..', 'schemas', 'UserAccount'));
const RouteHandler = require('express').Router();

RouteHandler.get('/', async (req, res) => {
  const accountInfo = await UserAccount.findOne({});
  return res.status(200).send({
    status: 'success',
    data: accountInfo,
  })
});

RouteHandler.patch('/:id', async (req, res) => {
  const { name, email } = req.body;
  const updatedAccountInfo = await UserAccount.findOneAndUpdate({
    _id: req.params.id,
  }, {
    name,
    email,
  }, { new: true });
  return res.status(200).send({
    status: 'success',
    data: updatedAccountInfo
  })
});

module.exports = {
  RouteHandler
};

