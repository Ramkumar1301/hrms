import { Router } from "express";
import getData from '../queries/viewdata.js';
import getUsers from "../queries/viewdata.js";

import pkg from 'pg';
const { Client } = pkg;
import { client, connectToDatabase, closeDatabaseConnection } from "../connection.js"

const route =Router();

route.get('/api/routecheck',(req,res,)=>{
    console.log("this is an api from route");
    res.send("this an hi from route folder")
    
})



route.get('/api/employeedetails',async (req, res) => {
    try {
        const userData = await getUsers(); // Retrieve user data
        res.json(userData); // Send user data as JSON response
    } catch (err) {
        console.error('Error handling /users:', err);
        res.status(500).send('Internal Server Error');
    }
});
connectToDatabase();

route.post('/api/employeedeta',async (req,res)=>{
    const{  employeeid, employee_fnam, employee_lname, employee_mname, designation, email, status, photo, empdob, emp_joining_date, phoneno} = req.body;
    
    try {
        const queryText = 
        'INSERT INTO public.employeedetails ( employeeid, employee_fnam, employee_lname, employee_mname, designation, email, status, photo, empdob, emp_joining_date, phoneno) VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9,$10,$11) RETURNING *';
        const values = [
            employeeid, employee_fnam, employee_lname, employee_mname, designation, email, status, photo, empdob, emp_joining_date, phoneno
        ];
    
        const result = await client.query(queryText, values);
        res.status(201).json(result)
      } catch (error) {
        console.error('Error inserting user:', error);
        res.status(500).send('Error inserting user');
      }
    }
      
      
      
    
);
/* connectToDatabase(); */
route.post('/api/insertData', async (req, res) => {
    /*  const client = await Client.connect(); */
  
    try {
      const data = req.body;
  
      // Adjust the SQL query based on your table structure
      const query = `
        INSERT INTO public.employeedetails (
          employeeid, employee_fnam, employee_lname, employee_mname, designation, email, 
          status, photo, empdob, emp_joining_date, phoneno
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;
  
      await client.query(query, [
        data.employeeid,
        data.employee_fnam,
        data.employee_lname,
        data.employee_mname,
        data.designation,
        data.email,
        data.status,
        data.photo,
        data.empdob,
        data.emp_joining_date,
        data.phoneno,
      ]);
  
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error inserting data into the database:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    } finally {
      // client.release();
    }
  });
  

process.on('SIGINT', async () => {
    await closeDatabaseConnection();
    process.exit(0);
});


export default route;