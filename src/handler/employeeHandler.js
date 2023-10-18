const addEmployee = require("../services/addEmployee");
const employeeHandler = (req, res) => {
  try {
    addEmployee(req.body);
    return res
      .status(201)
      .json({ status: "SUCCESS", message: "Employee Added Successfully" });
  } catch (err) {
    return res
      .status(400)
      .json({ status: "ERROR", message: "Bad Request", error });
  }
};

module.exports = employeeHandler;
