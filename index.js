const express = require('express'); 
const { google } = require('googleapis');   
const cors = require('cors'); 
const app = express(); 
app.use(express.json());
app.use(cors());

const Student = require('./back/app')

app.post("/addStudent",Student.addStudent);
app.post("/sessionData",Student.sessionData);

app.listen(3000, () => console.log(`App listening on port 3000!`));