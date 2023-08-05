# Carbon Emissions Data Tracking API - Task List

### Task list ( pending)
- [X] Docker composse file for quick deployment of project
- [X] get database configuration from .env 

- [ ] GitHub Documentation:
  - [ ] Update the README file to include instructions for running the application locally.
  - [ ] Provide an overview of the project, its purpose, and how to interact with the API.

- [ ] Documentation for developers about the file strcture and arrangments

#### addional task not included in assigment
- [ ] add login functionality in the project
- [ ] functonality to give only limited options for type of emission
    - currently tht emission type is string so it can be anything
- [ ] make admin panel for to access via browser
- [ ] make APIs for graphs


### Task list ( Completed )
- [x] Set up a Docker container for PostgreSQL.
- [x] Run the PostgreSQL container separately to serve as the database.

- [x] Create a new Node.js project and install all packages

- [x] Ensure proper connectivity between Node.js application and the PostgreSQL database.

- [x] Create basic strcture using using the MVC architecture.
    - models
    - controller
    - routers
    - config db

- [x] Create Company Model:
  - attributes: name, industry, location.
- [x] Create Emission Record Model:
  - attributes: company ID, emission type, quantity, year.
- [x] make FK relation between two models
 

- [X] Set Up Basic Routes with out controller logic:
  - [X] GET /api/companies:
      - List details of all companies.
  - [X] POST /api/companies:
      - Create a new company.
  - [X] GET /api/companies/:id:
      - Retrieve details of a specific company.
  - [X] GET /api/companies/:companyId/emission-records:
      - List emission records for a specific company (with pagination support).

- [x] Company Creation Logic:
  - handleCreateNewCompany controller

- [x] Company by ID Logic:
  - handleGetCompanyByID controller

- [X] All Company Listing Logic:
  - handleGetAllCompany controller

- [X] Emission Record Creation Logic:
  - handleCreateEmissionRecord controller

- [X] Emission Record by ID Logic:
  - handleGetEmissionRecordByID controller

- [x] Emission Record Related to Company Logic:
  - handleGetEmissionRecordsCompanyID controller



- [x] Postman Documentation:
