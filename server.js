import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import path from 'path';
import fs from 'fs';

const app = express();

app.use(express.static('build'));

app.get('/', (req, res) => {
  try {
    const appMarkup = renderToString(<App />);
    const indexFile = path.resolve(__dirname, 'public', 'index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }

      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${appMarkup}</div>`
        )
      );
    });
  } catch (err) {
    console.error(err);
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
