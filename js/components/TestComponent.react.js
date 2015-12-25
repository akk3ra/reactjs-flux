var React = require('react');
var TestActions = require('../actions/TestActions');

var TestComponent = React.createClass({
  myClickAction: function(){
    console.log("I am inside the myClickAction method..");
    TestActions.sendValue({myName: "Sandeep"});
  },
  render: function(){
    console.log("Inside the TestComponent class....");
    var dispLiElements = this.props.dispElements.map(function(dispElement){
      return <li>{dispElement}</li>;
    });
    return (
      <div>
      <ul>{dispLiElements}</ul>
      <input type="button" value="Click Me." onClick={this.myClickAction}/>
      </div>
    );
  }
});

module.exports = TestComponent;
