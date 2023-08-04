# Carbon Emissions Data Tracking API - Task List

## Setup and Infrastructure

- [ ] Set up a Docker container for PostgreSQL.
- [ ] Run the PostgreSQL container separately to serve as the database.
- [ ] Ensure proper connectivity between Node.js application and the PostgreSQL database.

## Initial Project Structure

- [ ] Create a new Node.js project.
- [ ] Organize the project using the MVC (Model-View-Controller) architecture.

## Models

- [ ] Create Company Model:
  - [ ] Define a Company model with attributes: name, industry, location.
  - [ ] Implement methods for creating, retrieving, and listing companies.

- [ ] Create Emission Record Model:
  - [ ] Define an Emission Record model with attributes: company ID, emission type, quantity, year.
  - [ ] Implement methods for creating, retrieving, and listing emission records.
  - [ ] Ensure that the emission record is associated with a company.

## Routes

- [ ] Set Up Basic Routes:
  - [ ] Create routes for handling CRUD (Create, Read, Update, Delete) operations for companies and emission records.
  - [ ] Implement placeholder route handlers for each CRUD operation.

## API Logic Implementation

### Companies

- [ ] Company Creation Logic:
  - [ ] Implement logic to create a new company with provided details.

- [ ] Company Retrieval Logic:
  - [ ] Implement logic to retrieve details of a specific company.

- [ ] Company Listing Logic:
  - [ ] Implement logic to list details of all companies.

### Emission Records

- [ ] Emission Record Creation Logic:
  - [ ] Implement logic to create a new emission record with provided details and associate it with a company.

- [ ] Emission Record Retrieval Logic:
  - [ ] Implement logic to retrieve details of a specific emission record, including associated company.

- [ ] Emission Record Listing Logic:
  - [ ] Implement logic to list emission records for a specific company, limiting the response to 10 records at a time.

## Error Handling

- [ ] Implement Error Handling:
  - [ ] Add appropriate error handling mechanisms throughout the API logic.
  - [ ] Ensure that error responses include informative error messages.

## API Documentation

- [ ] Postman Documentation:
  - [ ] Create Postman documentation for the API endpoints.
  - [ ] Document request formats, response formats, and example requests.

- [ ] GitHub Documentation:
  - [ ] Update the README file to include instructions for running the application locally.
  - [ ] Provide an overview of the project, its purpose, and how to interact with the API.

## Testing and Quality Assurance

- [ ] Test API Endpoints:
  - [ ] Test each API endpoint using tools like Postman or equivalent.

- [ ] Code Review and Refinement:
  - [ ] Review the codebase for clarity, readability, and adherence to best practices.
  - [ ] Refactor code if needed to improve organization and maintainability.

## Finalization and Deployment

- [ ] Final Testing:
  - [ ] Conduct comprehensive testing of the entire application to ensure functionality and error handling.

- [ ] Documentation Review:
  - [ ] Review and refine both Postman and GitHub documentation for accuracy and completeness.

- [ ] Deployment:
  - [ ] Deploy the Node.js application to a chosen hosting environment.
  - [ ] Update the GitHub repository with the deployed application's URL.

## Submission

- [ ] Push Code to Git Repository:
  - [ ] Push the final codebase to a public Git repository.

- [ ] Finalize Documentation:
  - [ ] Ensure that all documentation is up to date and accurately reflects the final state of the project.
