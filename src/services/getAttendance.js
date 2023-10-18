const db = require("../../connection");
const getAttendance = async (req) => {
  try {
    const query =
      "SELECT (date_format(date,'%d/%m/%y'))Date,attendance FROM attendance WHERE emp_id = ? AND YEAR(date) =?";
    const values = [req.params.id, req.params.year];

    return new Promise((resolve, reject) => {
      db.query(query, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          results.forEach((obj) =>
            obj.attendance
              ? (obj.attendance = "Present")
              : (obj.attendance = "Absent")
          );
          resolve(results);
        }
      });
    });
  } catch (err) {
    return err;
  }
};

module.exports = getAttendance;
