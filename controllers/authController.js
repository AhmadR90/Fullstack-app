const User = require("../models/users");
const { hash } = require("bcryptjs");
module.exports = {
  home: (req, res) => {
    try {
      res.send("Home page");
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },
  register: async (req, res) => {
    try {
      const { username, email, phone, password } = req.body;
      const userExist = await User.findOne({ email });
      if (userExist) {
        res.send("email already exists");
      }

      const hash_password = await hash(password, 10);
      const createUser = await User.create({
        username,
        email,
        phone,
        password: hash_password,
      });
      res.send({
        createUser,
        token: await createUser.generateToken,
        userId: createUser._id.toString(),
      });
    } catch (error) {
      console.log(error);
      return {
        error: error,
      };
    }
  },
};
