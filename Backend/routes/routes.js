import { Router } from "express";
import getData from '../queries/viewdata.js';
import getUsers from "../queries/viewdata.js";

const route =Router();
route.get('/api/routecheck',(req,res)=>{
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

route.post('/api/employeedetails',async (req,res)=>{
    
})




export default route;