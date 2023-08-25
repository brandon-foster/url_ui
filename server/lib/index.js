const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();
const BUILD_DIR = express.static(path.resolve(__dirname, '../dist/react-build'));
app.use(BUILD_DIR);
app.use(express.json());
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, BUILD_DIR, 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

