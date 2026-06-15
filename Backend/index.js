const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'Campus Service Request API is running'
  });
});

app.listen(port, () => {
  console.log(`Campus Service Request API listening on port ${port}`);
});
