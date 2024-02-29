import { Router } from "express";

/* import getUsers from "../queries/viewdata.js"; */
import {getEvent, getUsers,getBirthday} from '../controller/controller.js'
import pkg from 'pg';
const { Client } = pkg;
import { client, connectToDatabase, closeDatabaseConnection } from "../connection.js"

const route =Router();

route.get('/api/routecheck',(req,res,)=>{
    console.log("this is an api from route");
    res.send("this an hi from route folder")
    
})


//Employee Data Details
route.get('/api/employeedetails',async (req, res) => {
    try {
        const userData = await getUsers(); // Retrieve user data
        res.json(userData); // Send user data as JSON response
    } catch (err) {
        console.error('Error handling /users:', err);
        res.status(500).send('Internal Server Error');
    }
});
//Event Data Details
route.get('/api/eventdetail',async(req,res)=>{
  try{
    const eventData =await getEvent();
    res.json(eventData);
  }catch(err){
    console.log('error handling event',err);
    res.status(500).send('Internal Server Error');
  }
})
 
route.get('/api/birthday',async(req,res)=>{
 try {
  const birthday =await getBirthday();
    res.json(birthday);
 }catch(err){
  console.log('Error Handling Event ',err);
  res.status(500).send('Internal Server Error');

 }
})






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
  
route.post('/api/eventdetail',async (req,res)=>{
  const {event_name, event_date, event_description, event_incharge, event_status}=req.body;
  console.log(req.body)
  const defaultStatus = 'upcoming';
  const statusToInsert = event_status || defaultStatus;
  console.log(req.body)
  try{
    
    const queryText1=
    'INSERT INTO  public."Eventdetails" (event_name, event_date, event_description, event_incharge, event_status) VALUES ($1,$2,$3,$4,$5)RETURNING *'
    const values=[event_name, event_date, event_description, event_incharge, statusToInsert];
    const result = await client.query(queryText1, values);
    result.rows[0]
    res.status(201).json(result)
    console.log(result)
       
    

  }catch(error){
    console.error(error)
  }
});

process.on('SIGINT', async () => {
    await closeDatabaseConnection();
    process.exit(0);
});


export default route;