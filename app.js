const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js');

const app = express();

app.use('/graphql', graphqlHTTP());

app.listen(3000, () => {
  console.log('App listening on port 3000')
});
