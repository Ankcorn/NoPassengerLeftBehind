const express = require("express");
const { postgraphile } = require("postgraphile");
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors())
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

app.listen(process.env.PORT || 3000, () => {
  console.log('Hey we are running now :)')
});
