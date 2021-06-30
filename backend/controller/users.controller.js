const Users = require("../models/users");

class UsersController {
  static async apiLogin(req, res, next) {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const user = await Users.findOne({ username: username });
      if (user.password === password) {
        req.session.user_id = user._id;
        res.redirect("/");
      }
    } catch (error) {
      console.log(error);
    }
    res.redirect("/");
  }

  static async apiSignup(req, res, next) {}
}

module.exports = UsersController;
