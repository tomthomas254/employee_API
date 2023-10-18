const addAttendance = require("../services/bulkAttendanceRegistration");
const attendanceHandler = (req, res) => {
  try {
    addAttendance(req);
    return res
      .status(201)
      .json({ status: "SUCCESS", message: "Attendance Added Successfully" });
  } catch (err) {
    return res
      .status(400)
      .json({ status: "ERROR", message: "Bad Request", err });
  }
};

module.exports = attendanceHandler;
