var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;

module.exports = function(obj, setup) {
    'use strict';
    var emitter = new EventEmitter();
    obj.emitter = emitter;
    return obj;
};
