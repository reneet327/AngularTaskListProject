var myApp = angular.module('myApp', []);

myApp.controller('tListCtrl', function($scope) {

  $scope.tasks= [
    {item: "Brush Teeth", completed: false},
    {item: "Take Shower", completed: false},
    {item: "Get Dressed", completed: false},
    {item: "Eat Breakfast", completed: false}
  ];

  // Receives the new item entered in the input box and puts
  // it on the end of the array
  $scope.addItem = function(newItem) {

    // Check that the input box has a value
    if(!(newItem === undefined || newItem === "")){
      $scope.tasks.push({
        item: newItem, completed: false
      });
      $scope.missingNewItemError = "";
    } else {

      // Show an error if no item was entered
      $scope.missingNewItemError = "Please Enter an Item";
    }
  };

  $scope.rmvItem = function(event){
    for(var i=0; i < $scope.tasks.length; i++){
      console.log(event.target.value);
      if(event.target.value === $scope.tasks[i].item){
            console.log( $scope.tasks[i]);
      $scope.tasks.splice( [i],1);
      }
    }
  };



});
