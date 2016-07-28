'use strict';

app.controller('mondayCtrl', function ($scope, localStorageService) {

    $scope.initMonday = function () {
        $scope.monday = [];

        if (!localStorageService.get("mondayList")) {
            $scope.monday = [
                {title: "Coffee", isDone: false, number: "1"},
                {title: "Orange", isDone: false, number: "2"},
                {title: "Melba toast", isDone: false, number: "3"},

                {title: "Orange", isDone: false, number: "4"},
                {title: "Boiled egg", isDone: false, number: "5"},
                {title: "Yogurt", isDone: false, number: "6"},

                {title: "Tomato", isDone: false, number: "7"},
                {title: "Tomato", isDone: false, number: "8"},
                {title: "Boiled egg", isDone: false, number: "9"},
                {title: "Boiled egg", isDone: false, number: "10"},
                {title: "1/2 Head Of Lettuce", isDone: false, number: "11"},
                {title: "Melba toast", isDone: false, number: "12"},
                {title: "Melba toast", isDone: false, number: "13"}
            ];
        }else{
            $scope.monday = localStorageService.get("mondayList");
        }
    };

    $scope.markAllChecked = function () {
        $scope.monday.forEach(function (item) {
            item.isChecked = true;
        });
    };

    $scope.uncheckAllChecked = function () {
        $scope.monday.forEach(function (item) {
            item.isChecked = false;
        });
    };

    $scope.checkedCount = function () {
        var itemDone = 0;
        $scope.monday.forEach(function (item) {
            if (item.isChecked === true) {
                itemDone += 1;
            }
        });
        return itemDone;
    };

    $scope.almostOneNotChecked = function () {
        var itemDone = $scope.checkedCount();
        if (itemDone < $scope.monday.length) {
            return true;
        } else
            return false;
    };

    $scope.$watch("monday",function(newVal,oldVal) {
        if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
            localStorageService.add("mondayList",angular.toJson(newVal));
        }
    },true);
});