const addEmployees = require("../services/bulkUserAdd");
const employeesHandler = (req, res) => {
  try {
    addEmployees(req);
    return res
      .status(201)
      .json({ status: "SUCCESS", message: "Employees Added Successfully" });
  } catch (err) {
    return res
      .status(400)
      .json({ status: "ERROR", message: "Bad Request", err });
  }
};

module.exports = employeesHandler;
