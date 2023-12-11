app.get('/api', (req, res) => {
  res.json({ time: Date().toString() });
});