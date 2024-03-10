const { BaseRepository } = require("../base");
const { User } = require("../models");

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  create(body) {
    return this.collection.create(body);
  }

  findOne(query){
    return this.collection.findOne(query);
  }
}

module.exports = UserRepository;
