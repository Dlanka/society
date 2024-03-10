/**
 * Base repository
 */

class BaseRepository {
  constructor(collection) {
    this.collection = collection;
  }

  findAll() {
    return this.collection.find().lean().exec();
  }
}

module.exports = BaseRepository;
