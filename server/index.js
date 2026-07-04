const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const CLIENT_DIST = path.join(__dirname, '..', 'client', 'dist', 'client', 'browser');
const GAMES_DIR = path.join(__dirname, '..', 'Games');

app.use('/games', express.static(GAMES_DIR, { maxAge: '1d' }));
app.use(express.static(CLIENT_DIST, { maxAge: '1h' }));

// Angular client-side routing fallback (must come after static assets).
app.get('*', (req, res) => {
  res.sendFile(path.join(CLIENT_DIST, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Games hub listening on port ${PORT}`);
});
