import knex from 'knex';

const connection = knex({
    client: 'mysql2',
    connection: {
        host : "caronas-mysql.mysql.database.azure.com",
        port : 3306,
        user : "fernando@caronas-mysql",
        password : "caronas123H",
        database : 'carpool'
    },
    useNullAsDefault: true
});


export default connection;