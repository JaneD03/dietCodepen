'use strict';

app.controller('thursdayCtrl', function ($scope, localStorageService) {

    $scope.initThu = function () {
        $scope.thursday = [];

        if (!localStorageService.get("thursdayList")) {
            $scope.thursday = [
                {title: "Coffee", isDone: false, number: "1"},
                {title: "Orange", isDone: false, number: "2"},
                {title: "Melba toast", isDone: false, number: "3"},

                {title: "Sir (125gr)", isDone: false, number: "4"},
                {title: "Tomato", isDone: false, number: "5"},
                {title: "Melba toast", isDone: false, number: "6"},

                {title: "Minced meat (125gr)", isDone: false, number: "7"},
                {title: "Tomato", isDone: false, number: "8"},
                {title: "Tomato", isDone: false, number: "9"},
                {title: "Orange", isDone: false, number: "10"},
                {title: "Melba toast", isDone: false, number: "11"}
            ];
        }else{
            $scope.thursday = localStorageService.get("thursdayList");
        }
    };

    $scope.markAllChecked = function () {
        $scope.thursday.forEach(function (item) {
            item.isChecked = true;
        });
    };

    $scope.uncheckAllChecked = function () {
        $scope.thursday.forEach(function (item) {
            item.isChecked = false;
        });
    };

    $scope.checkedCount = function () {
        var itemDone = 0;
        $scope.thursday.forEach(function (item) {
            if (item.isChecked === true) {
                itemDone += 1;
            }
        });
        return itemDone;
    };

    $scope.almostOneNotChecked = function () {
        var itemDone = $scope.checkedCount();
        if (itemDone < $scope.thursday.length) {
            return true;
        } else
            return false;
    };

    $scope.$watch("thursday",function(newVal,oldVal) {
        if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
            localStorageService.add("thursdayList",angular.toJson(newVal));
        }
    },true);
});