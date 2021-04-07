const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },


  async find(req, res) {
    try {
      const user = await User.findOne({ where: { id: req.params.id } });
      return res.json(user);
    } catch (error) {
      return (error)
    }
  },

  async store(req, res) {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    return res.json(user);
  }
}