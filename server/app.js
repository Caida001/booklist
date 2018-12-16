const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

// connect to mlab database
mongoose.connect('mongodb://jake:test123@ds113606.mlab.com:13606/gql')
mongoose.connection.once('open', () => {
  console.log('connected to mlab')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('now listening on port 4000')
})
