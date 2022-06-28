const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());

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