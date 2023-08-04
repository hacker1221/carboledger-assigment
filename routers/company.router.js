const express = require("express");

const {handleCreateNewCompany,handleGetCompanyByID,handleGetAllCompany,handleGetEmissionRecordsCompanyID} = require("../controllers/company.controller")

const router=express.Router()


// Companies API:

// GET /api/companies: List details of all companies.
// POST /api/companies: Create a new company.
// GET /api/companies/:id: Retrieve details of a specific company.
// GET /api/companies/:companyId/emission-records:
//               List emission records for a 
//               specific company (with pagination support).


router
    .route("/")
    .get(handleGetAllCompany)
    .post(handleCreateNewCompany)

router.get("/:id",handleGetCompanyByID)


router.get("/:companyId/emission-records",handleGetEmissionRecordsCompanyID)

module.exports = router