# Database Model

### Companies Table:
- id:
    - Primary Key, unique identifier for the company.
- name:
    - Name of the company.
- industry:
    - Industry to which the company belongs.
- location:
    - Location of the company.



### EmissionRecords Table:
- id:
    - Primary Key, unique identifier for the emission record.
- companyId:
    - Foreign Key, references the id in the Companies table.
- type:
    - Type of emission (e.g., electricity, transport, waste).
- quantity:
    - Quantity of the emission source used.
- year:
    - Year in which the emission record was recorded.



