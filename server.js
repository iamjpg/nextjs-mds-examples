const { createServer } = require('https');
const { parse } = require('url');
const stencil = require('@moxiworks/mds-alpha/hydrate');
const next = require('next');
const fs = require('fs');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const httpsOptions = {
  key: fs.readFileSync('./certs/lvh.me.key'),
  cert: fs.readFileSync('./certs/lvh.me.crt'),
};
app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Server started on https://lvh.me:3000');
    console.log(process.env);
  });
});

// https://kandi.openweaver.com/javascript/jagreehal/nextjs-stenciljs-ssr-example

// const stencil = require("stencil-web-components/hydrate");
// const express = require("express");
// const next = require("next");

// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   server.get("/a", async (req, res) => {
//     const html = await app.renderToHTML(req, res, "/a", req.query);
//     const renderedHtml = await stencil.renderToString(html);
//     res.send(renderedHtml.html);
//   });
//   server.listen(port, err =&gt; {
//     if (err) throw err;
//     console.log(`&gt; Ready on http://localhost:${port}`);
//   });
// });
