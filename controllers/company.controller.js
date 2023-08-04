const db=require("../models")
const company=db.company
const emission=db.emission

// POST /api/companies: Create a new company.
// GET /api/companies/:id: Retrieve details of a specific company.
// GET /api/companies: List details of all companies.


async function handleCreateNewCompany(req,res){
    
    // Check if all required fields are present in the request body
    const { name, industry, location } = req.body;
    if (!name || !industry || !location) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    // Validate input format
    if (typeof name !== "string" || typeof industry !== "string" || typeof location !== "string") {
        return res.status(400).json({ error: "Invalid input format" });
    }

    // TODO: Create new company logic here

    new_obj=await company.create({
        name: name,
        industry: industry,
        location:location
      })
        .then((tutorial) => {
          console.log(">> Created company: " + JSON.stringify(tutorial, null, 4));
          
          return tutorial;
        })
        .catch((err) => {
          console.log(">> Error while creating Compnay: ", err);
          return false
        });
    

    if(new_obj){
        return res.status(201).json({'id':new_obj.id})
    }else{
        return res.status(401).json({'error':"error while creating company object"})
    }
    
}


async function handleGetCompanyByID(req,res){
    // y
    const companyId =parseInt(req.params.id,0)

    // Check if company ID is present in the request params
    if (!companyId) {
        return res.status(400).json({ error: "Missing company ID" });
    }

    // Retrieve details about the company using the company ID
    const result = await company.findByPk(companyId);
    if (result === null) {
    console.log('Not found!');
    res.json({'msg':"NOT found "})
    } else {
    //console.log(result instanceof Project); // true
    res.json(result.toJSON())
    }
    // Send the details as a response
    // res.json({ status: "handleGetCompanyByID" })

}


async function handleGetAllCompany(req,res){
    // Check if page parameter is present in the query string, otherwise use default value 1
    const page = req.query.page || 1;

    // Calculate offset based on page and a fixed limit of 10 records per page
    const limit = 10;
    const offset = (page - 1) * limit;

    const total_count = await company.count({});
    const result = await company.findAll({ offset: offset, limit: limit });

    // const { total_count, result } = await company.findAndCountAll({ offset: offset, limit: limit });
    
    const total_pages = Math.ceil(total_count / limit);
    if (result === null) {
    console.log('Not found!');
    res.json({'msg':"NOT found "})
    } else {
    //console.log(result instanceof Project); // true
    res.json({"total":total_pages,"current_page":page,"data":result})
    }
    

    // res.json({ status: "handleGetAllCompany" })

}


async function handleGetEmissionRecordsCompanyID(req,res){
     // Check if companyId parameter is present in the request params
     const companyId = req.params.companyId;
     if (!companyId) {
         return res.status(400).json({ error: "Missing company ID" });
     }
 
     // Validate input format (company ID should be a number)
     if (isNaN(companyId)) {
         return res.status(400).json({ error: "Invalid company ID format" });
     }
 
     // Check if company exists (replace 'Company' with your Sequelize model name)
     const company_data = await company.findByPk(companyId);
     if (!company_data) {
         return res.status(404).json({ error: "Company not found" });
     }
 
     // Pagination: Get page number from query parameters, default to 1
     const page = parseInt(req.query.page) || 1;
     const limit = 10; // Records per page
     const offset = (page - 1) * limit;
 
     // TODO: Retrieve emission records for the specific company using the validated company ID and pagination
     const total_count = await emission.count({where: {
        companyId: companyId
    }});
     const result = await emission.findAll({
        where: {
            companyId: companyId
        }, 
        offset: offset, 
        limit: limit });
 
     //  const { total_count, result } = await emission.findAndCountAll({
    //     where: {
    //         companyId: companyId
    //     },
    //     offset: offset,
    //     limit: limit
    //   });
    
    const total_pages = Math.ceil(total_count / limit);
    if (result === null) {
    console.log('Not found!');
    res.json({'msg':"NOT found "})
    } else {
    //console.log(result instanceof Project); // true
    res.json({"total":total_pages,"current_page":page,"data":result})
    }
    
     // Send the emission records as a response
    //  res.json({ status: "handleGetEmissionRecordsCompanyID", companyId, page, limit });
}


module.exports={
    handleCreateNewCompany,
    handleGetCompanyByID,
    handleGetAllCompany,
    handleGetEmissionRecordsCompanyID
}




