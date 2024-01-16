const User = require("../models/userModels");

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json({ users });
};

//! Additional check if want for security reasons //
// if (data.name.trim().length === 0) {
//   res.json({ msg: "name too short" });
//   return;
// }

//! time out function
// try {
//   const user = await User.create(data);
//   res.status(201).json({ user });
// } catch (error) {
//   res.status(500).json({ error });
// }

function createJWT(user) {
  return createJWT.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

// async function create(req, res) {
//   try {
//     const user = await User.create(req.body);
//     const token = createJWT(user);
//     res.json(token);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }

// const create = async (req, res) => {
//   const data = req.body;
//   const user = await User.create(data);
//   res.json({ user });
// };
async function create(req, res) {
  const data = req.body;

  try {
    const user = await User.create(data);
    const token = createJWT(user);
    res.json({ user, token });
  } catch (err) {
    res.status(400).json(err);
  }
}

const login = async (req, res) => {
  const data = req.body;

  const x = User.findById();
  res.json({ data });
};

module.exports = {
  getAllUsers,
  create,
  login,
};
