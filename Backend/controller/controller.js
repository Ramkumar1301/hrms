// main file
import { client, connectToDatabase, closeDatabaseConnection } from "../connection.js";

export async function getUsers() {
    try {
        await connectToDatabase();
        const result = await client.query('SELECT * FROM public.employeedetails');
        console.log(result);
        return result.rows;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    } finally {
        /* await closeDatabaseConnection(); */
    }
}

export async function getEvent() {
    try {
        await connectToDatabase();
        const result = await client.query('SELECT * FROM public."Eventdetails"');
        console.log(result);
        return result.rows;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    } finally {
      /*   await closeDatabaseConnection(); */
    }
}
