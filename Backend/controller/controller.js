import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.post('/upload', upload.single('file'), (req, res) => {
    // Access file buffer: req.file.buffer
    // Implement logic to parse Excel data and save to PostgreSQL
    // You may use libraries like 'exceljs' or 'xlsx' for Excel processing
  
    // Example: Insert data into the PostgreSQL table
    pool.query('INSERT INTO your_table_name (column1, column2) VALUES ($1, $2)', ['value1', 'value2'], (err, result) => {
      if (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Data inserted successfully');
        res.status(200).json({ message: 'File uploaded and data inserted successfully' });
      }
    });
  });
  