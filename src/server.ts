import fastify from 'fastify';

const server = fastify();

server.get('/', async (request, reply) => {

    return { hello: 'world' };
});


server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3000
}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});