/**
 * StudentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  deleteStudent: async (req, res) => {
    try {
      const data = req.body;
      const deleteStudent = await Student.destroy({ id: { in: data } });
      return res.status(200).json("deleted !");
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
