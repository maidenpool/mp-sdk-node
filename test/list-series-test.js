/*
 This file is auto-generated, do not edit
*/

'use strict'
var chai = require('chai').assert;
var recombee = require('./../index.js');
var rqs = recombee.requests;

var env = require('./set-environment.js');

describe('ListSeries', function(){
  this.timeout(150000);

  before(function(done){

    env.setEnvironment()
    .then(()=> {
      setTimeout(done, 20000);
     });
  });
  
  it ('lists entities', (done) => {
    let req, req2, resp;
    req = new rqs.ListSeries();
    env.client.send(req)
    .then((res) => {
      chai.deepEqual(['entity_id'], res);
      done();
    });
  });
});
