var AppDispatcher = require('../dispatcher/AppDispatcher');

var TestActions = {
  sendValue: function(data){
    console.log("Called the sendValue function...");
    AppDispatcher.handleAction({
      actionType: 'TEST_ACTION',
      data: data
    });
  }
};

module.exports = TestActions;
