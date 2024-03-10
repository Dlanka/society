const mongoose = require("mongoose");

class Database {
  static connection = mongoose.connection;

  constructor(url, options) {
    this.url = url;
    this.options = options;
  }

  async connect() {
    try {
      await mongoose.connect(this.url, this.options);

      console.info(
        `Connected to ${String(mongoose.connection.db.databaseName).toUpperCase()} database`
      );
    } catch (error) {
      console.log("Database connection error: " + error);

      throw error;
    }
  }

  async disconnect() {
    try {
      await mongoose.disconnect();

      console.log("Database disconnected");
      
    } catch (error) {
      console.log("Database disconnecting error: " + error);
      throw error;
    }
  }
}

module.exports = Database;