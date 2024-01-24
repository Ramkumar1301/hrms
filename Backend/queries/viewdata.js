import pkg from 'pg';

const { Client } = pkg;

async function getUsers() {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'HRmanagement',
        password: 'root',
        port: 5432,
    });

    try {
        await client.connect();
        const result = await client.query('SELECT * FROM public.employeedetails');
        console.log(result)
        return result.rows;
    } catch (err) {
        console.error('Error fetching users:', err);
        throw err;
    } finally {
        await client.end();
    }
} 1

export default getUsers;
