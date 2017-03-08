"use strict";

angular.module("app").controller("appCtrl",
["$scope",function($scope){        
        
    $scope.formModel={
        "firstName" : " ",
        "lastName" : " ",
        "hourlyPay" :" ",
        "totalHour":" "  
    }
    $scope.grossIncome=function(){
        return $scope.formModel.hourlyPay*$scope.formModel.totalHour;
    }
    
    $scope.tax=function(){
        return $scope.grossIncome()*0.06;        
    }
    
    $scope.netIncome=function(){
        return $scope.grossIncome()-$scope.tax();
    }
        
}]);