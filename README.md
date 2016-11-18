# rdf-parser-jsonld for browser usage

This provides a version of [rdf-parser-jsonld](https://github.com/rdf-ext/rdf-parser-jsonld)
for usage in the browser. It does not include rdf-ext so this needs to be loaded
separately.

What is is good for? If you're using a library that includes rdf-ext and just 
want to add support to parse turtle adding [dist/jsonld-parser.js](dist/jsonld-parser.js) 
is the easiest way.

## Building

For convenience the result of the built is included in the `dist/` directory. To
build it yourself run:

    npm install
