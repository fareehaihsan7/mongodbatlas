const express = require("express");
const users=require("./models/users");
const app = express();
app.use(express.json());
const usercontroller=require('./controllers/usercontroller');
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://fareehaihsan7:dyzwXLGKfeqUUnAK@db.01nxa5y.mongodb.net/db1?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=> { console.warn("db connection done"); })

app.post('/api/users', usercontroller.createUser);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//app.get("/users",UserControls.create);








/*const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://fareehaihsan7:<dyzwXLGKfeqUUnAK>@db.01nxa5y.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/
