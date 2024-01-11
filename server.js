const Hapi = require('@hapi/hapi');
const LandRoutes = require('./routes/LandRoutes.js');

const init = async () => {
    const server = Hapi.server({
        port: 1234,
        host: 'localhost'
    });

    server.route(LandRoutes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
