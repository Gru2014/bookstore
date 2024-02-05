const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const cors = require('cors')
const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost/bookstore", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(bodyParser.json());
app.use(cors())
// GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
