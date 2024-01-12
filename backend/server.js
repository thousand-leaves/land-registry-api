const Hapi = require('@hapi/hapi');
const LandRoutes = require('./routes/LandRoutes.js');

const init = async () => {
    const server = Hapi.server({
        port: 1234,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
                // origin: ['http://localhost:3000'],
                additionalHeaders: ['Accept', 'Content-Type', 'Authorization'],
                additionalExposedHeaders: ['Authorization'],
                credentials: true
            }
        }
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
