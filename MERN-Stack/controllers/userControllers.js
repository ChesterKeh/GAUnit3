const User = require("../models/userModels");

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json({ users });
};

const create = async (req, res) => {
  const data = req.body;
  const user = await User.create(data);
  res.json({ user });
};

module.exports = {
  getAllUsers,
  create,
};
