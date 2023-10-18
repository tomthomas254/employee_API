const db = require("../../connection");
const csv = require("csvtojson");
const addEmployees = async (params) => {
  try {
    const fileData = params.file.buffer.toString();
    console.log(fileData);
    csv()
      .fromString(fileData)
      .then((jsonArrayObj) => {
        output = jsonArrayObj;
        console.log(output);
        output.forEach((user) => {
          db.query(
            "INSERT INTO employees(first_name, last_name, address) VALUES (?, ?, ?)",
            [user.first_name, user.last_name, user.address]
          );
        });
      });
  } catch (err) {
    return err;
  }
};

module.exports = addEmployees;
