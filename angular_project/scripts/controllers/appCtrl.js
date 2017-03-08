"use strict";
angular.module("app").controller("appCtrl",
["$scope", function($scope){
    $scope.random= "Hello World";
    $scope.firstName= "Suraj";
    $scope.lastName= "Chhetri";
    
    $scope.submit = function(){
        $scope.random = "Good Morning";
        
    }
    
    $scope.formModel={
        "firstName" : "John",
        "lastName" : "Thapa",
        "phone" : "5157710000"
    }
    
    $scope.sampalArray=["cat","dog","bat"]
    
    var person1={
         "firstName" : "jitu",
        "lastName" : "kharka",
        "phone" : "5157710000"
    }
    
    var person2={
         "firstName" : "raju",
        "lastName" : "bushal",
        "phone" : "5157710000"
    }
    
    var person3={
         "firstName" : "manish",
        "lastName" : "chhetri",
        "phone" : "5157710000"
    }
    
    $scope.personArray= [];
    $scope.personArray.push(person1);
    $scope.personArray.push(person2);
    $scope.personArray.push(person3);
    
    console.log($scope.personArray.person1);
    
    
    $scope.sampleSubmit=function(){
        
        console.log($scope.formModel);
        
    }
}]);
                                            
 