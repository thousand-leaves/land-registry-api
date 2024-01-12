const LandController = require('../controller/LandController');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: LandController.getHelloWorld,
  },
  {
    method: 'GET',
    path: '/land',
    handler: LandController.getAllLand,
  },
  {
    method: 'GET',
    path: '/land/{landId}',
    handler: LandController.getLandById,
  },
  {
    method: 'POST',
    path: '/land',
    handler: LandController.createLand,
  },
  {
    method: 'PUT',
    path: '/land/{landId}',
    handler: LandController.updateLand,
  },
  {
    method: 'PATCH',
    path: '/land/{landId}',
    handler: LandController.patchLand,
  },
  {
    method: 'DELETE',
    path: '/land/{landId}',
    handler: LandController.deleteLand,
  },];
