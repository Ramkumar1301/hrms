import pkg from 'pg';

const { Client } = pkg;

const client = new Client({
    user: 'postgres',
        host: 'localhost',
        database: 'HRmanagement',
        password: 'root',
        port: 5432,
});

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

async function closeDatabaseConnection() {
    try {
        await client.end();
        console.log('Closed the database connection');
    } catch (error) {
        console.error('Error closing the database connection:', error);
    }
}

export { client, connectToDatabase, closeDatabaseConnection };
