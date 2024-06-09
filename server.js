import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

const app = express();

app.get('/weather', async function (req, res) {

  const city = req.query.city;
  const my_api_key = "yuLfPjT6lOs98DhZ5A7qSiQ0SpxbVuEWz0RdbSZE";

  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': my_api_key
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error('Request failed:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
