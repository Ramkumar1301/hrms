
// connection.js
import pkg from 'pg';

const { Client } = pkg;
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'HRmanagement',
    password: 'root',
    port: 5432,
});

const connectToDatabase = async () => {
    try {
        if (!client._connected) {
            await client.connect();
            console.log('Connected to the database');
        }
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
};

const closeDatabaseConnection = async () => {
    try {
        if (client._connected) {
            await client.end();
            console.log('Connection to the database closed');
        }
    } catch (error) {
        console.error('Error closing the database connection:', error);
        throw error;
    }
};

export { client, connectToDatabase, closeDatabaseConnection };

/* const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
};

const closeDatabaseConnection = async () => {
    try {
        await client.end();
        console.log('Connection to the database closed');
    } catch (error) {
        console.error('Error closing the database connection:', error);
        throw error;
    }
}; */

/* async function connectToDatabase() {
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
*/
/* export { client, connectToDatabase, closeDatabaseConnection }; */
 