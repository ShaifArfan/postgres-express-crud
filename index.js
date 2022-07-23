const express = require('express');
const userRoutes = require('./routes/users');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

// routes
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})