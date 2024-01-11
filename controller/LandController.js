// LandController.js
const LandService = require('../service/LandService.js');

const getHelloWorld = (request, h) => {
    return 'Hello World!';
};

const getAllLand = async (request, h) => {
    try {
        const land = await LandService.getAllLand();
        return h.response(land).code(200);
    } catch (err) {
        return { message: err.message, status: 500 };
    }
};

// Get land by id
const getLandById = async (request, h) => {
        try {
            const land = await LandService.getLandById(request.params.landId);
            return h.response(land).code(200);
        } catch (err) {
            return h.response(err.message).code(err.status);
        }
    };

// Create land
const createLand = async (request, h) => {
        try {
            const land = await LandService.createLand(request.payload);
            return h.response(land).code(201);
        } catch (err) {
            return h.response(err.message).code(err.status);
        }
    };

// Update land
const updateLand = async (request, h) => {
        try {
            const land = await LandService.updateLand(request.params.landId, request.payload);
            return h.response(land).code(200);
        } catch (err) {
            return h.response(err.message).code(err.status);
        }
    }

// Patch land
const patchLand = async (request, h) => {
        try {
            const land = await LandService.patchLand(request.params.landId, request.payload);
            return h.response(land).code(200);
        } catch (err) {
            return h.response(err.message).code(err.status);
        }
    }

// Delete land
const deleteLand = async (request, h) => {
        try {
            await LandService.deleteLand(request.params.landId);
            return h.response().code(204);
        } catch (err) {
            return h.response(err.message).code(err.status);
        }
    }

module.exports = {
    getHelloWorld,
    getAllLand,
    getLandById,
    createLand,
    updateLand,
    patchLand,
    deleteLand
};