// POST /api/companies: Create a new company.
// GET /api/companies/:id: Retrieve details of a specific company.
// GET /api/companies: List details of all companies.


async function handleCreateNewCompany(req,res){
    // check if all fields are there in request
    // create new company
    res.json({ status: "handleCreateNewCompany" })
}


async function handleGetCompanyByID(req,res){
    // check if it has id in request
    // get the details about company
    res.json({ status: "handleGetCompanyByID" })

}


async function handleGetAllCompany(req,res){
    // get the list of all th companies
    // add pagination for this api
    res.json({ status: "handleGetAllCompany" })

}


async function handleGetEmissionRecordsCompanyID(req,res){
    // check if it has id in request
    //check if company present or not 
    // get the emission records with pagination
    res.json({ status: "handleGetEmissionRecordsCompanyID" })

}


module.exports={
    handleCreateNewCompany,
    handleGetCompanyByID,
    handleGetAllCompany,
    handleGetEmissionRecordsCompanyID
}




