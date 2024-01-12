const { Land } = require('../database/model/Land.js');

const LandService = {
    
    async getAllLand() {
        return await Land.findAll();
    },

    async getLandById(landId) {
        try {
            const land = await Land.findByPk(landId);
            if (!land) {
                throw { message: 'Land not found', status: 404 };
            }
            return land;
        } catch (err) {
            throw { message: err.message, status: 500 };
        }
    },

    async createLand(land) {
        try {
            const { broad_habitat, habitat_type, habitat_area, distinctiveness, habitat_condition, strategic_significance } = land;
            return await Land.create({ broad_habitat, habitat_type, habitat_area, distinctiveness, habitat_condition, strategic_significance });  
        } catch (err) {
            throw { message: err.message, status: 500 };
        }
    },

    async updateLand(landId, updatedLandData) {
        try {
            const land = await Land.findByPk(landId);
            if (!land) {
                throw { message: 'Land not found', status: 404 };
            } else {
                await land.update(updatedLandData);
                return land;
            } 
        } catch (err) {
            throw { message: err.message, status: 500 };
        }
    },

    async patchLand(landId, patchedLandData) {
        try {
            const land = await Land.findByPk(landId);
            if (!land) {
                throw { message: 'Land not found', status: 404 };
            } else {
                await land.update(patchedLandData);
                return land;
            } 
        } catch (err) {
            throw { message: err.message, status: 500 };
        }
    },

    async deleteLand(landId) {
        try {
            const land = await Land.findByPk(landId);
            if (!land) {
                throw { message: 'Land not found', status: 404 };
            } else {
                await land.destroy();
                return { message: 'Land deleted successfully' };
            } 
        } catch (err) {
            throw { message: err.message, status: 500 };
        }
    }

};

module.exports = LandService;