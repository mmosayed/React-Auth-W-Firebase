const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('./firebase');

// -------- MIDDLEWARE
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const checkFirebaseToken = (req, res, next) => {
  const { token } = req.body;

  admin.auth().verifyIdToken(token)
    .then(function(decodedToken) {
      var uid = decodedToken.uid;
      next();
    }).catch(function(error) {
      // Handle error
      res.json('ERROR!!!!')
    });
}

// -------- ROUTES
app.get('/', (req, res) => {
  res.json('Hello world');
})

app.post('/unprotected', (req, res) => {
  const { email, id } = req.body;
  res.json(`Welcome! You are user ${email} with ${id}`);
})

app.post('/protected', checkFirebaseToken, (req, res) => {
  res.json(`This is some sensitive data`);
})

app.listen(port, () => {
  console.log('Server listening on port: '+port);
})