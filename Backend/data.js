import pkg from 'pg';

const { Client } = pkg;

async function getUsers() {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'practice',
        password: 'root',
        port: 5432,
    });

    try {
        await client.connect();
        const result = await client.query('SELECT * FROM public.users');
        return result.rows;
    } catch (err) {
        console.error('Error fetching users:', err);
        throw err;
    } finally {
        await client.end();
    }
} 

export default getUsers;
