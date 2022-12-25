const express=require('express');
const {
    getAllEmployes, 
    AddEmploye, 
    DeleteEmploye, 
    UpdateEmploye 
} =require("../controllers/employeControllers.js");
const router = express.Router();

router.route("/").get(getAllEmployes);
router.route("/:id").delete(DeleteEmploye).put(UpdateEmploye);
router.route("/create").post(AddEmploye);

module.exports = router;