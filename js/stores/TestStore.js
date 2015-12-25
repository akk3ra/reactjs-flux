var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TestProduct = require('../utils/TestProduct');

var TestStore = function(){};
var CHANGE_EVENT = 'change';
var myCount = 0;
var TestStore = assign({}, EventEmitter.prototype, {

  emitChange: function(){
    console.log("Inside emitChange method of TestStore class..");
    this.emit(CHANGE_EVENT);
  },
  addViewListener: function(callback){
    console.log("Adding a change listener...");
    this.on(CHANGE_EVENT, callback);
  },
  removeViewListener: function(callback){
    console.log("Removing the change listener.....");
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(data){
  var myData = data.action;
  var source = data.source;

  switch(source){

    case 'VIEW_ACTION':
      console.log("case VIEW_ACTION called....");
      myCount += 1;
      TestProduct.updateElement({name: myData.data.myName+myCount});
      break;

    default:
      console.log("Entered the default case....");
      break;
  }
  TestStore.emitChange();
});

module.exports = TestStore;
