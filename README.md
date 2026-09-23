# Front-End Projects

A collection of small front-end projects built with plain HTML, CSS, and JavaScript, no frameworks or build tools. Each project lives in its own folder and can be opened directly in a browser.

## Projects

| Folder | Description | Notes |
|---|---|---|
| [`colorGenerator`](colorGenerator) | Color scheme generator using The Color API | No setup needed |
| [`homeTown`](homeTown) | A static web page about my hometown | No setup needed |
| [`movie-WatchList`](movie-WatchList) | Search films with the OMDb API and keep a watchlist | Needs a free OMDb API key (see its README) |

## Run a project

Clone the repo and open a project's `index.html`:

```bash
git clone https://github.com/ray01111989/Front-end-projects.git
cd Front-end-projects
open colorGenerator/index.html    # macOS; use xdg-open on Linux, or double-click the file
```

For `movie-WatchList`, first create `movie-WatchList/js/config.js` from `config.example.js` and add your key. That file is git-ignored.

## Skills practiced

- Semantic HTML and CSS layout
- DOM manipulation and event handling in vanilla JavaScript
- Calling public APIs with `fetch`, handling errors, and escaping data before showing it
- Building multi-page static sites

## Related

See my [portfolio](https://github.com/ray01111989/Portfolio) for polished work and [`scrimbia_Projects`](https://github.com/ray01111989/scrimbia_Projects) for more course exercises.
