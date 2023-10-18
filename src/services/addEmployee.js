const db = require("../../connection");
const addEmployee = async (params) => {
  try {
    const value = params;
    await db.query(
      "INSERT INTO employees(first_name,last_name,address) values (?,?,?)",
      [value.first_name, value.last_name, value.address]
    );
  } catch (err) {
    return err;
  }
};

module.exports = addEmployee;
