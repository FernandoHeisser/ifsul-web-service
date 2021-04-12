import knex from 'knex';

const connection = knex({
    client: 'mysql2',
    connection: {
        host : '127.0.0.1',
        user : 'fernando',
        password : '123',
        database : 'carpool'
    },
    useNullAsDefault: true
});


export default connection;