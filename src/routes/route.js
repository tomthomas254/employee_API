express = require("express");
const multer = require("multer");
const upload = multer();
router = express.Router();

const addEmployee = require("../handler/employeeHandler");
const bulkUserAdd = require("../handler/bulkEmployeeHandler");
const bulkUserAddJson = require("../handler/bulkUserHandler");
const bulkAttendanceRegistration = require("../handler/bulkAttendanceHandler");
const getAttendance = require("../handler/attendanceHandler");

router.post("/addEmployee", addEmployee);
router.post("/bulkUserAdd", upload.single(), bulkUserAdd);
router.post("/bulkUserAddJson", bulkUserAddJson);
router.post("/bulkAttendanceRegistration", bulkAttendanceRegistration);
router.get("/getAttendance/:id/:year", getAttendance);

module.exports = router;
