const db = require("../../connection");
const addEmployees = async (params) => {
  try {
    params.body.forEach((user) => {
      db.query(
        "INSERT INTO employees(first_name, last_name, address) VALUES (?, ?, ?)",
        [user.first_name, user.last_name, user.address]
      );
    });
  } catch (err) {
    return err;
  }
};

module.exports = addEmployees;
