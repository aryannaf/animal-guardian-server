const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const categoryRoutes = require('./routes/categoryRoute');
const speciesRoutes = require('./routes/speciesRoute');

app.get("/", (req, res) => {
    res.send("VR ANIMAL RESCUE");
});

app.use('/categories', categoryRoutes);
app.use('/species', speciesRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});