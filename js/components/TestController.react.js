var React = require('react');
var TestComponent = require('./TestComponent.react');
var TestStore = require('../stores/TestStore');
var TestProduct = require('../utils/TestProduct');

var TestController = React.createClass({
  getInitialState: function(){
    TestProduct.populateData();
    return {
      dispElements: TestProduct.getData()
    };
  },
  getData: function(){
    return TestProduct.getData();
  },
  componentDidMount: function(){
    console.log("Inside the componentDidMount method..");
    TestStore.addViewListener(this.triggerReload);
  },
  componentWillMount: function(){
    console.log("Inside the componentWillMount method..");
    TestStore.removeViewListener(this.triggerReload);
  },
  triggerReload: function(){
    console.log("Inside the triggerReload method to re-render..");
    this.setState({
      dispElements: TestProduct.getData()
    });
  },
  render: function(){
    return (
      <TestComponent dispElements = {this.state.dispElements}/>
    );
  }
});

module.exports = TestController;
