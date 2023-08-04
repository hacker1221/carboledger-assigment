const { Sequelize, DataTypes } = require('sequelize');

// ### EmissionRecords Table:
// - id: Primary Key, unique identifier for the emission record.
// - companyId: Foreign Key, references the id in the Companies table.
// - type: Type of emission (e.g., electricity, transport, waste).
// - quantity: Quantity of the emission source used.
// - year: Year in which the emission record was recorded.


module.exports = (sequelize) => {
    const EmissionRecords = sequelize.define("EmissionRecords", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return EmissionRecords;
};