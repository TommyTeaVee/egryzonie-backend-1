const { User } = require('../models');

module.exports = {
  async create (req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: 'Wystąpił błąd podczas tworzenia użytkownika.', errorCode: 'antique' });
    }
  }
};