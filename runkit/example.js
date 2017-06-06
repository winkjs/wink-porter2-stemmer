/* eslint no-console: 0 */
// Load porter stemmer V2
var stem = require( 'wink-porter2-stemmer' );

console.log( stem( 'properly' ) );
// -> proper

console.log( stem( 'borrowed' ) );
// -> borrow

console.log( stem( 'stemming' ) );
