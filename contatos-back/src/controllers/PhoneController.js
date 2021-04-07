const User = require('../models/User');
const Phone = require('../models/Phone');

module.exports = {
  async index(req,res) {
    const { userId } = req.params;
    const user = await User.findByPk(userId, {
      include: { association: 'phone' }
    });
    if (!user) return res.status(400).json({ error: 'User not found' });
    return res.json(user);
  },

  async store(req,res) {
    const { userId } = req.params;
    const { phone, type } = req.body;

    const user = await User.findByPk(userId);
    if (!user) return res.status(400).json({ error: 'User not found' });
    const phoneAdd = await Phone.create({ userId, phone, type });
    return res.json(phoneAdd);
  },

  async delete(req,res) {
    const { id } = req.params;
    const hasPhone = await Phone.findByPk(id);
    if (!hasPhone) return res.status(400).json({ error: 'Phone not found' });
    const phone = await Phone.destroy({ where: { id } });
    return res.json(phone);
  }
}