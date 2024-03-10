class BaseController {
  constructor(repoClass) {
    this.repo = new repoClass();
  }

  getAll = async (req, res) => {
    try {
      const docs = await this.repo.findAll();

      return res.status(200).send({
        result: {
          message: "success",
          data: docs,
        },
      });
    } catch (error) {
      return res.status(500).send({
        result: {
          message: "error",
          error,
        },
      });
    }
  };
}

module.exports = BaseController;
