module.exports = {
  "globDirectory": "web/",
  "globPatterns": [
    "**/*.{php,js,png,css,html,ico}"
  ],
  "swDest": "web\\sw.js",
   "skipWaiting": true,
   "templatedURLs": { '/': ['index.php']
}
};
