
# wink-porter2-stemmer

> Implementation of [Porter Stemmer Algorithm V2](https://snowballstem.org/algorithms/english/stemmer.html) by Dr Martin F Porter

### [![npm version](https://badge.fury.io/js/wink-porter2-stemmer.svg)](https://badge.fury.io/js/wink-porter2-stemmer) [![Build Status](https://api.travis-ci.org/decisively/wink-porter2-stemmer.svg?branch=master)](https://travis-ci.org/decisively/wink-porter2-stemmer) [![Coverage Status](https://coveralls.io/repos/github/decisively/wink-porter2-stemmer/badge.svg?branch=master)](https://coveralls.io/github/decisively/wink-porter2-stemmer?branch=master) [![devDependencies Status](https://david-dm.org/decisively/wink-porter2-stemmer/dev-status.svg)](https://david-dm.org/decisively/wink-porter2-stemmer?type=dev)

<img align="right" src="https://decisively.github.io/wink-logos/logo-title.png" width="100px" >

**wink-porter2-stemmer** is a part of **[wink](https://www.npmjs.com/~sanjaya)**, which is a family of Machine Learning NPM packages. They consist of simple and/or higher order functions that can be combined with NodeJS `stream` and `child processes` to create recipes for analytics driven business solutions.

[Stemming](https://en.wikipedia.org/wiki/Stemming) reduces an inflected word into its base form, for example *learning* to *learn*. It is used extensively in Natural Language Processing (NLP).

## Installation
Use **[npm](https://www.npmjs.com/package/wink-porter2-stemmer)** to install:
```
npm install wink-porter2-stemmer --save
```


## Usage
```javascript

// Load porter stemmer V2
var stem = require( 'wink-porter2-stemmer' );

console.log( stem( 'properly' ) );
// -> proper

console.log( stem( 'borrowed' ) );
// -> borrow

console.log( stem( 'stemming' ) );
// -> stem
```

## Need Help?
If you spot a bug and the same has not yet been reported, raise a new [issue](https://github.com/decisively/wink-porter2-stemmer/issues) or consider fixing it and sending a pull request.


## Copyright & License
**wink-porter2-stemmer** is copyright 2017 GRAYPE Systems Private Limited.

It is licensed under the under the terms of the GNU Affero General Public License as published by the Free
Software Foundation, version 3 of the License.
