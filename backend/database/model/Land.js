const { DataTypes } = require('sequelize');
const sequelize = require('../db-config');

const Land = sequelize.define(
    'Land',
    {
        land_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        broad_habitat: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        habitat_type: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        habitat_area: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        distinctiveness: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        habitat_condition: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        strategic_significance: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
    },
    {
        tableName: 'land',
        timestamps: false
    }
);

module.exports = { sequelize, Land };