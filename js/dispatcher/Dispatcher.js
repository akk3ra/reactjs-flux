var assign = require('object-assign');
var Promise = require('es6-promise').Promise;

var Dispatcher = function(){};
var _callbacks = [];
var _promises = [];

Dispatcher.prototype = assign({}, Dispatcher.prototype, {
  register: function(callback){
    _callbacks.push(callback);
    return _callbacks.length - 1;
  },
  dispatch: function(data){
    var _resolves = [];
    var _rejects = [];
    _promises = _callbacks.map(function(callback, index){
      console.log("Inside the callback....");
      return new Promise(function(resolve, reject){
        _resolves[index] = resolve;
        _rejects[index] = reject;
      });
    });
    _callbacks.forEach(function(callback, index){
        Promise.resolve(callback(data)).then(function(){
          _resolves[index](data);
        }).catch(function(){
          _rejects[index](data);
        });
    });
  }
});

module.exports = Dispatcher;
