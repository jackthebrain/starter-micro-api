const express = require('express'); 
const { google } = require('googleapis');   
const cors = require('cors');
const app = express(); 
const { auth, SheetId } = require('./config');
app.use(express.json());
app.use(cors());


const sheet = google.sheets({ version: 'v4', auth: auth });



const addStudent = async (req, res) => {

  const studentName = req.body.name;
  const studentLastName = req.body.lastName;
  const studentEmail = req.body.email;
  const studentPhone = req.body.phone;
  const sheetName = req.body.sheetName;
  const range = sheetName+'!A2';
  const valueInputOption = 'USER_ENTERED';

  let values = [
    [studentName, studentLastName, studentEmail, studentPhone]
  ];

  const resource = {
    values,
  };

  try {
    const result = await sheet.spreadsheets.values.append({
      spreadsheetId: SheetId,
      range,
      valueInputOption,
      resource,
    });

    console.log('cells added', result.data.updatedCells);

    res.status(200).json({ message: 'Student added successfully' });
  } catch (err) {

    console.error('Error adding student:', err);

    res.status(500).json({ error: 'An error occurred while adding the student' });
  }
}

const sessionData = async (req, res) =>{
  const sheetPage = req.body.sheetName;
  try {
    const NbrLeft = await sheet.spreadsheets.values.get({
        auth: auth,
        spreadsheetId: SheetId,
        range: `${sheetPage}!G7`
    });
    const dateS = await sheet.spreadsheets.values.get({
      auth: auth,
      spreadsheetId: SheetId,
      range: `${sheetPage}!G9`
  });
    
    const NbrPlacesLeft = String(NbrLeft.data.values);
    const dateSession = String(dateS.data.values);
    const data = {
      placesAvailable: NbrPlacesLeft,
      dateSession: dateSession
  };
    res.status(200).json(data);
  }
  catch(err) {
    console.log("readSheet func() error", err);  
  }
}

module.exports = {addStudent , sessionData};