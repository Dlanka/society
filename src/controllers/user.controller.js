const { BaseController } = require("../base");
const { BadRequestError } = require("../errors");
const { UserRepository } = require("../repositories");

class UserController extends BaseController {
  constructor() {
    super(UserRepository);
  }

  create = async (req, res) => {
    try {
      const { email, name, password } = req.body;

      const user = await this.repo.findOne({ email });

      if (user) {
        return res.badRequest("Email already exist");
        // throw new BadRequestError("Email already exist");
      }

      const doc = await this.repo.create({
        email,
        name,
        password,
      });

      return res.success(doc);
    } catch (err) {
      return res.error(err, "User creation failed");
    }
  };
}

module.exports = UserController;
