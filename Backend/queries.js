/* import pkg from 'pg';
const { Pool } = pkg;

// Create a PostgreSQL pool
const pool = new Pool({
  user: 'postgres',
        host: 'localhost',
        database: 'practice',
        password: 'root',
        port: 5432
});

const registerUser = async (request, response) => {
  const {
    firstName,
    MiddleName,
    lstName,
    emailid,
    mobileNo,
    password
  } = request.body;

  try {
    const queryText = 'INSERT INTO public.userregistration (firstName, MiddleName, lstName, emailid, mobileNo, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = [
      firstName,
      MiddleName,
      lstName,
      emailid,
      mobileNo,
      password
    ];

    const result = await pool.query(queryText, values);
    response.status(201).send(`User added with ID: ${result.rows[0].id}`);
  } catch (error) {
    console.error('Error inserting user:', error);
    response.status(500).send('Error inserting user');
  }
};

export default registerUser;

/* import { request } from 'express';
import {pkg,Pool }from 'pg';


const registerUser = async(request, response) => {
  const {
    firstName,
    MiddleName,
    lstName,
    emailid,
    mobileNo,
    password
  } = request.body;

  pool.query(
    'INSERT INTO TABLENAME (firstName, MiddleName, lstName, emailid, mobileNo, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [
      firstName,
      MiddleName,
      lstName,
      emailid,
      mobileNo,
      password
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

export default registerUser;
 */ 