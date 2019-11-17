const express = require("express");
const { postgraphile } = require("postgraphile");
const cors = require('cors');
require('dotenv').config();
require('./jobs.js')
const app = express();
app.use(cors());
console.log(process.env.DATABASE_URL);
app.use(
  postgraphile(
    process.env.DATABASE_URL,
    "assistance",
    {
      graphiql: true,
      enhanceGraphiql: true,
      live: true,
      ownerConnectionString: process.env.DATABASE_URL,
      appendPlugins: [
        //...
        require("@graphile/subscriptions-lds").default,
      ],
    }
  )
);


app.listen(process.env.PORT || 5000, () => {
  console.log('Hey we are running now :)')
});
