const { Sequelize, DataTypes } = require('sequelize');
//company

// - id: Primary Key, unique identifier for the company.
// - name: Name of the company.
// - industry: Industry to which the company belongs.
// - location: Location of the company.


module.exports = (sequelize) => {
    const company = sequelize.define("company", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        industry: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return company;
};