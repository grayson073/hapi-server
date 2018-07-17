const Hapi = require('hapi');
const Mongoose = require('mongoose');
const Coin = require('./models/Coin');
Mongoose.connect('mongodb://localhost:27017/money');
Mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB database');
});

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route([
    {
        method: 'GET',
        path: '/',
        handler: (req, res) => {
            return 'Hello, world!';
        }
    },
    {
        method: 'GET',
        path: '/api/coins',
        handler: (req, res) => {
            return Coin.find();
        }
    },
    {
        method: 'POST',
        path: '/api/coins',
        handler: (req, res) => {
            const { name, size, value } = req.payload;
            const coin = new Coin({
                name,
                size,
                value
            });
            
            return coin.save();
        }
    }
]);

server.route({
    method: 'GET',
    path: '/{name}',
    handler: (req, res) => {

        req.logger.info('In handler %s', req.path);

        return 'Hello, ' + encodeURIComponent(req.params.name) + '!';
    }
});

const init = async() => {
    
    await server.register(require('inert'));
    // await server.register({
    //     plugin: require('hapi-pino'),
    //     options: {
    //         prettyPrint: true,
    //         logEvents: ['response']
    //     }
    // });

    server.route({
        method: 'GET',
        path: '/hello',
        handler: (req, res) => {
            return res.file('./public/hello.html');
        }
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();