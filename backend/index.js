const express = require('express');
const cors = require('cors');
const rideRoutes = require('./src/routes/rideRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', rideRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));