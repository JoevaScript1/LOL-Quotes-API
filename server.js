const express = require('express');
const quotes = require('./quotesdb');

const app = express();
const PORT = process.env.PORT || 3000;

// Get all quotes
app.get('/quotesdb', (req, res) => {
  res.json(quotes);
});

// Get quotes by champion name
app.get('/quotesdb/:name', (req, res) => {
  const name = req.params.name.toLowerCase();
  const filteredQuotes = quotes.filter(quote => quote.name.toLowerCase() === name);

  if (filteredQuotes.length > 0) {
    res.json(filteredQuotes);
  } else {
    res.status(404).json({ message: `No quotes found for ${req.params.name}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
