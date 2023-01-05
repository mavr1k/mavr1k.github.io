const express = require('express');

// read public folder
const app = express();
app.use(express.static('public'));

// listen port 3000
app.listen(3000, () => {
  console.log('Server started on port http://localhost:3000');
});
