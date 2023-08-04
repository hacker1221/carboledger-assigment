const db=require("../models")
const company=db.company
const emission=db.emission

// POST /api/emission-records:
//               Create a new emission record.

// GET /api/emission-records/:id:
//              Retrieve details of a specific emission record.


async function handleCreateEmissionRecord(req,res){
    // Check if all required fields are present in the request body
    const { companyId, type, quantity, year } = req.body;
    if (!companyId || !type || !quantity || !year) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // Validate input format
    if (isNaN(companyId) || typeof type !== "string" || isNaN(quantity) || isNaN(year)) {
        return res.status(400).json({ error: "Invalid input format" });
    }

    // Validate quantity and year formats
    if (!Number.isInteger(year) || quantity <= 0) {
        return res.status(400).json({ error: "Invalid quantity or year format" });
    }

    // TODO: Create new emission record logic here

    // check if companyId is valid 
    const result = await company.findByPk(parseInt(companyId));
    if (result === null) {
    console.log('Not found!');
    res.json({'msg':"company NOT found "})
    } 
    // if valid then only add emission record
    new_obj=await emission.create({
        type:type ,
        quantity:quantity ,
        year:year,
        companyId:result.id
      })
        .then((tutorial) => {
          console.log(">> Created emission: " + JSON.stringify(tutorial, null, 4));
          
          return tutorial;
        })
        .catch((err) => {
          console.log(">> Error while creating Compnay: ", err);
          return false
        });

        if(new_obj){
            return res.status(201).json({'id':new_obj.id})
        }else{
            return res.status(401).json({'error':"error while creating emission object"})
        }
        
    // Send a success response
    // res.status(201).json({ message: "Emission record created successfully" });
}


async function handleGetEmissionRecordByID(req,res){
    // Check if id parameter is present in the request params
    const emissionRecordId = parseInt(req.params.id);
    if (!emissionRecordId) {
        return res.status(400).json({ error: "Missing emission record ID" });
    }

    // Validate input format (emission record ID should be a number)
    if (isNaN(emissionRecordId)) {
        return res.status(400).json({ error: "Invalid emission record ID format" });
    }

    // Retrieve information about the emission record using the validated ID
    const result = await emission.findByPk(emissionRecordId);
    if (result === null) {
    console.log('Not found!');
    res.json({'msg':"NOT found "})
    } else {
    //console.log(result instanceof Project); // true
    data=result.toJSON()
    // console.log(result.getemission())
    res.json({data})
    }

    // Send the emission record details as a response
    // res.json({ status: "handleGetEmissionRecordByID", emissionRecordId });
}



module.exports={
    handleCreateEmissionRecord,
    handleGetEmissionRecordByID
}