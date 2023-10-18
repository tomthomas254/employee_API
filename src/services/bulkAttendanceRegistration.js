const db = require("../../connection");
const addAttendance = async (params) => {
  try {
    params.body.forEach((user) => {
      const value = [user.emp_id, user.date, user.attendance];
      db.query(
        "INSERT INTO attendance(emp_id,date,attendance) values (?,?,?)",
        value
      );
    });
  } catch (err) {
    return err;
  }
};

module.exports = addAttendance;
