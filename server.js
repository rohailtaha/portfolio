import 'ignore-styles';

import express from 'express';
import fs from 'fs';
import nodemailer from 'nodemailer';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import './1-env-loader';
import Contact from './src/pages/contact/Contact';
import App from './src/pages/home/App';
import SingleWork from './src/pages/single-work/SingleWork';
import Work from './src/pages/work/Work';
import {
  EMAIL_SERVER_PASSWORD,
  EMAIL_SERVICE,
  PORT,
} from './src/server-utils/constants';
import { MY_EMAIL, PROJECTS } from './src/utils/constants';

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

app.post('/contact', (req, res) => {
  try {
    const { email, name, subject, message } = req.body;
    const transporter = nodemailer.createTransport({
      service: EMAIL_SERVICE,
      auth: {
        user: MY_EMAIL,
        pass: EMAIL_SERVER_PASSWORD, // App password generated in step 3
      },
    });

    const mailOptions = {
      from: email,
      to: MY_EMAIL,
      subject: subject ? subject : 'Contact Form Submission',
      text: message,
    };

    // Send email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(201).end();
  } catch {
    res.status(500).end();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
