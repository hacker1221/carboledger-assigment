const express = require("express");
const router=express.Router()

const { handleCreateEmissionRecord,handleGetEmissionRecordByID } = require("../controllers/emission.controller")


// Emission Records API:

// POST /api/emission-records:
//               Create a new emission record.

// GET /api/emission-records/:id:
//              Retrieve details of a specific emission record.


router.post("/",handleCreateEmissionRecord)
router.get("/:id",handleGetEmissionRecordByID)


module.exports = router