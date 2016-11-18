var JsonLdParser = require('rdf-parser-jsonld');
rdf.parsers['application/ld+json'] = JsonLdParser;
if (typeof window !== 'undefined') {
    window.JsonLdParser = JsonLdParser;
}