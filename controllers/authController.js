const User = require("../models/users");
const{hash}=require("bcryptjs")
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
      const hash_password=await hash(password,10)
      await User.create({ username, email, phone, password:hash_password });
      res.send(User)
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },
};
