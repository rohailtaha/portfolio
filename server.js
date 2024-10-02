import 'ignore-styles';

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import App from './src/pages/home/App';
import SingleWork from './src/pages/single-work/SingleWork';
import { PROJECTS } from './src/utils/constants';
import Work from './src/pages/work/Work';
import Contact from './src/pages/contact/Contact';

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

app.get('/contact', (req, res) => {
  try {
    const appMarkup = renderToString(<Contact />);
    const indexFile = path.resolve(__dirname, 'public', 'contact.html');
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

app.get('/work', (req, res) => {
  try {
    const appMarkup = renderToString(<Work />);
    const indexFile = path.resolve(__dirname, 'public', 'work.html');
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

app.get('/work/:projectName', (req, res) => {
  try {
    const projectName = req.params.projectName;
    const appMarkup = renderToString(
      <SingleWork project={PROJECTS[projectName]} />
    );
    const indexFile = path.resolve(__dirname, 'public', 'single-work.html');
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

app.listen(3500, () => {
  console.log('Server is running on http://localhost:3000');
});
