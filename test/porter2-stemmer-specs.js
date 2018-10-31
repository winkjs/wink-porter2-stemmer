//     wink-porter2-stemmer
//     Implementation of Porter Stemmer Algorithm V2 by Dr Martin F Porter
//
//     Copyright (C) 2017-18  GRAYPE Systems Private Limited
//
//     This file is part of “wink-porter2-stemmer”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

/* eslint-disable no-sync */

var chai = require( 'chai' );
var mocha = require( 'mocha' );
var stem = require( '../src/wink-porter2-stemmer.js' );
var fs = require( 'fs' );

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

// Validate stem test cases given by Dr Martin F Porter for Porter Stemmer Algoritm V2.
describe( 'stem()', function () {
  // This is a longish test - stemming 30K words - needs higher timeout for travis!
  this.timeout(3600);
  var input = fs.readFileSync( './test/data/stem-input.txt', 'utf-8' ).split( '\n' );
  var output = fs.readFileSync( './test/data/stemmed-output.txt', 'utf-8' ).split( '\n' );

  input.pop();
  output.pop();

  // Reduce verbosity of test output by moving `it` outside the `forEach`.
  it( 'should return stemmed output correctly for the stem input', function () {
    input.forEach( function ( word, i ) {
      expect( stem( word ) ).to.deep.equal( output[ i ] );
    } );
  } );
} );
