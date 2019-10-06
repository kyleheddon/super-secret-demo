import App from './App';
import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import layout from './layout';

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    const markup = renderToString(<App />);

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
          layout(markup)
      );
    }
  });

export default server;
