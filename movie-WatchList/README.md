# Movie Watchlist

Search for films with the [OMDb API](https://www.omdbapi.com/), read a summary card for each (poster, rating, runtime, genre, plot), and save favorites to a watchlist that is kept in your browser. Includes a light and dark theme. Built as a solo project for Scrimba's Front-End Developer Career Path.

## Features

- Search by title with "Load More" paging (10 results at a time)
- Add or remove films from a watchlist page
- Watchlist and theme are saved in the browser's `localStorage` (they stay on this device only)
- "Read more" / "Read less" for long plots

## Setup

The app needs a free OMDb API key.

1. Request a key at https://www.omdbapi.com/apikey.aspx.
2. Copy the example config and add your key:

```bash
cp js/config.example.js js/config.js
```

3. Edit `js/config.js` so it contains your key. This file is git-ignored, so it is not committed.
4. Open `index.html` in a browser (or serve the folder with any static server).

Without a key, the search page shows a "Missing API key" message.

> **About the key:** a site that runs only in the browser has to send its key to every visitor, so anyone can see it in the network tab. Use a free key you can replace at any time, and never reuse a paid or important key here. To keep a key fully secret you would need a small server function that adds it (as in the CineVault project).

## Files

```
index.html          Search page
watchlist.html      Saved films
js/script.js        All app logic (search, cards, watchlist, theme)
js/config.example.js  Template for your API key
css/style.css       Styles, including the dark theme
img/                Icons and placeholder artwork
```
