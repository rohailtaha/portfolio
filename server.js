import 'ignore-styles';

import express from 'express';
import fs from 'fs';
import nodemailer from 'nodemailer';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import './1-env-loader';
import Contact from './src/pages/contact/Contact';
import Home from './src/pages/home/Home';
import SingleWork from './src/pages/single-work/SingleWork';
import Work from './src/pages/work/Work';
import {
  EMAIL_SERVER_PASSWORD,
  EMAIL_SERVICE,
  PORT,
} from './src/server-utils/constants';
import { serverErrorResponse } from './src/server-utils/helpers';
import { MY_EMAIL, PROJECTS } from './src/utils/constants';

const app = express();

app.use(express.static('build'));

app.get('/', (req, res) => {
  try {
    const appMarkup = renderToString(<Home />);
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
  } catch {
    return serverErrorResponse(res);
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
  } catch {
    return serverErrorResponse(res);
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
  } catch {
    return serverErrorResponse(res);
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
  } catch {
    return serverErrorResponse(res);
  }
});

app.use(express.json());

app.post('/contact', (req, res) => {
  try {
    const { email: fromEmail, name, subject, message } = req.body;
    const transporter = nodemailer.createTransport({
      service: EMAIL_SERVICE,
      auth: {
        user: MY_EMAIL,
        pass: EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: fromEmail,
      to: MY_EMAIL,
      subject: subject ? subject : 'Contact Form Submission',
      text: `Email From: ${fromEmail}\nName: ${name}\n\n${message}`,
      replyTo: fromEmail,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(201).end();
  } catch (err) {
    console.error(err);
    return serverErrorResponse(res);
  }
});

app.get('/sitemap.xml', (req, res) => {
  try {
    const sitemapFile = path.resolve(__dirname, 'public', 'sitemap.xml');
    res.sendFile(sitemapFile);
  } catch {
    return serverErrorResponse(res);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
