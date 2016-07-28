'use strict';

app.controller('fridayCtrl', function ($scope, localStorageService) {

    $scope.initFri = function () {
        $scope.petak = [];

        if (!localStorageService.get("fridayList")) {
            $scope.friday = [
                {title: "Coffee", isDone: false, number: "1"},
                {title: "Orange", isDone: false, number: "2"},
                {title: "Melba toast", isDone: false, number: "3"},

                {title: "Cooked Meat (200gr)", isDone: false, number: "4"},
                {title: "Tomato", isDone: false, number: "5"},
                {title: "Melba toast", isDone: false, number: "6"},

                {title: "Vegetables (500gr)", isDone: false, number: "7"},
                {title: "Boiled egg", isDone: false, number: "8"},
                {title: "Tomato", isDone: false, number: "9"}
            ];
        }else{
            $scope.friday = localStorageService.get("fridayList");
        }
    };

    $scope.markAllChecked = function () {
        $scope.friday.forEach(function (item) {
            item.isChecked = true;
        });
    };

    $scope.uncheckAllChecked = function () {
        $scope.friday.forEach(function (item) {
            item.isChecked = false;
        });
    };

    $scope.checkedCount = function () {
        var itemDone = 0;
        $scope.friday.forEach(function (item) {
            if (item.isChecked === true) {
                itemDone += 1;
            }
        });
        return itemDone;
    };

    $scope.almostOneNotChecked = function () {
        var itemDone = $scope.checkedCount();
        if (itemDone < $scope.friday.length) {
            return true;
        } else
            return false;
    };

    $scope.$watch("friday",function(newVal,oldVal) {
        if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
            localStorageService.add("fridayList",angular.toJson(newVal));
        }
    },true);
});