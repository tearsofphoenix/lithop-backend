#!/usr/bin/env node
// var debug = require('debug')('pontifex');
var fs = require('fs');
var path = require('path');

if (process.env.NODE_ENV !== 'production') {
  if (!require('piping')({
      hook: true,
      ignore: /(\/\.|~$|\.json$)/i
    })) {
    return;
  }
}

require('./server.babel'); // babel registration (runtime transpilation for node)
require('./app');

