const express = require("express");
const { postgraphile } = require("postgraphile");
require('dotenv').config();

const app = express();
console.log(process.env.DATABASE_URL)
app.use(
  postgraphile(
    process.env.DATABASE_URL,
    "assistance",
    {
      graphiql: true,
      enhanceGraphiql: true,
    }
  )
);

app.listen(process.env.PORT || 3000);
