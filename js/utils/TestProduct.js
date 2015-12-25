var myData = [];
var TestProduct = {

  getData: function(){
    return myData;
  },
  updateElement: function(dataElement){
    myData.push(dataElement);
    return myData.length;
  },
  populateData: function(){
    myData[0] = {name: "Sandeep"};
    myData[1] = {name: "Sadhanna"};
  }
};

module.exports = TestProduct;
