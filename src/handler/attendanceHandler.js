const getAttendance = require("../services/getAttendance");
const attendanceHandler = async (req, res) => {
  try {
    let output = await getAttendance(req);
    return res.status(201).json({ status: "SUCCESS", message: output });
  } catch (err) {
    return res
      .status(400)
      .json({ status: "ERROR", message: "Bad Request", err });
  }
};

module.exports = attendanceHandler;
``