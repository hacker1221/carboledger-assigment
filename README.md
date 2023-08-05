
# Carboledger: Backend Assignment

This repository contains the backend code for a simple carbon emissions data tracking REST API, built using Node.js and Express.js, and using a PostgreSQL database.

### Prerequisites

Before you begin, ensure that you have Docker installed on your system. If not, you can download and install Docker from [https://www.docker.com/get-started](https://www.docker.com/get-started).

### Getting Started

To run this project on your local system, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/hacker1221/carboledger-assigment
   ```

2. Navigate to the project directory:

  ```bash
  cd carboledger-backend
  ```

3. Open a terminal in the project directory and run the following command to start the application using Docker:

  ```bash
  docker-compose up
  ```
This command will set up the required containers for Node.js and PostgreSQL, and the application will be accessible at http://localhost:8000.

4. To stop the application, press `Ctrl + C` in the terminal and run the following command to remove the containers:
```bash
docker-compose down

```
### Project Details
- Node.js version: 18.17.0 [link](https://nodejs.org/en)
- PostgreSQL version: 14.8 or Above [link](https://www.postgresql.org/download/)
- Express.js version: 4.18.2 [link](https://expressjs.com/)
- Sequelize version: 6.32.1 [link](https://sequelize.org/)
- Docker version 23.0.4 or Above [link](https://www.docker.com/)

### Usage
- This project is already set up with the necessary configurations in the `docker-compose.yml` file.
- By running the `docker-compose up` command, you will start both the Node.js application and the PostgreSQL database containers. The application will be accessible at http://localhost:8000.
- and thenode application is started via `nodemon` so if you make any changes it will imediatly refeclected


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
