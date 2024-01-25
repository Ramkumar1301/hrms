/* import express from 'express';
import getUsers from './data.js'; // Assuming data.js exports the getUsers function
import bodyParser from 'body-parser';
import registerUser from './queries.js'
/* const bodyParser = require('body-parser') */
/* import cors from 'cors'
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', async (req, res) => {
    try {
        const userData = await getUsers(); // Retrieve user data
        res.json(userData); // Send user data as JSON response
    } catch (err) {
        console.error('Error handling /users:', err);
        res.status(500).send('Internal Server Error');
    }
});
app.post('/user',async(req,res)=>{
  try{
   const { firstName, MiddleName, lstName, emailid, mobileNo, password} = req.body;
    const posData = await  registerUser(req,res);
    res.json(posData)
    console.log(posData)
  }catch(err){
    console.error('Error handling /users:', err);
        res.status(500).send('Internal Server Error');
  }
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
 */
import  express from 'express';
import cors from 'cors';
import routeapi from './routes/routes.js'
import swaggerUi from 'swagger-ui-express';  // Import swaggerUi
import swaggerSpec from '../Backend/swaggerconfig.js'
import bodyParser from 'body-parser';
const port = 3000;
const app=express();
app.use(cors());
app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use(routeapi);


app.get('/',(req,res)=>{
  res.send("Hey Hi Ramkumar")
  res.status(200);
})



app.listen(port, ()=>{
  console.log(`THE SERVER IS RUNNING IN ${port}`)

})
process.on('SIGINT', async () => {
  try {
      await closeDatabaseConnection();
      console.log('Database connection closed.');
      process.exit(0);
  } catch (error) {
      console.error('Error closing database connection:', error);
      process.exit(1);
  }
});