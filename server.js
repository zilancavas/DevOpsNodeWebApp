'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	res.send(`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello World</title>
  </head>
  <body>
		<b>Hello FS2025 DevOps Course! :-)</b>
  </body>
</html>
`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
