const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;
const cors = require('cors');
const JAWSDB_URL = "mysql://qd7978u8k28d735e:pl8yx9nronlzroz6@n4m3x5ti89xl6czh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/baftoh13vs20lq8m";

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const categoryRoutes = require('./routes/categoryRoute');
const speciesRoutes = require('./routes/speciesRoute');

app.get("/", (req, res) => {
    res.send("ANIMAL GUARDIAN");
});

app.use('/categories', categoryRoutes);
app.use('/species', speciesRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});