/* eslint-disable no-sync */

var chai = require( 'chai' );
var mocha = require( 'mocha' );
var stem = require( '../src/wink-porter2-stemmer.js' );
var fs = require( 'fs' );

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

// Validate stem test cases given by Dr Martin F Porter for Porter V2 Algoritm.
describe( 'stem()', function () {
  // This is a longish test - stemming 30K words - needs higher timeout for travis!
  this.timeout(3600);
  var input = fs.readFileSync( './test/data/stem-input.txt', 'utf-8' ).split( '\n' );
  var output = fs.readFileSync( './test//data/stemmed-output.txt', 'utf-8' ).split( '\n' );

  input.pop();
  output.pop();

  // Reduce verbosity of test output by moving `it` outside the `forEach`.
  it( 'should return stemmed output correctly for the stem input', function () {
    input.forEach( function ( word, i ) {
      expect( stem( word ) ).to.deep.equal( output[ i ] );
    } );
  } );
} );
