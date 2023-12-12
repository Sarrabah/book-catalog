const express = require('express');
const app = express();
const port = 3001;
const bookRoute = require('./routes/bookRoute');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', bookRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
