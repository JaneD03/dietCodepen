'use strict';

app.controller('tuesdayCtrl', function ($scope, localStorageService) {

    $scope.initTue = function () {
        $scope.tuesday = [];

        if (!localStorageService.get("tuesdayList")) {
            $scope.tuesday = [
                {title: "Coffee", isDone:false, number: "1"},
                {title: "Orange", isDone: false, number: "2"},
                {title: "Melba toast", isDone: false, number: "3"},

                {title: "Orange", isDone: false, number: "4"},
                {title: "Boiled egg", isDone: false, number: "5"},
                {title: "Yogurt", isDone: false, number: "6"},
                {title: "Melba toast", isDone: false, number: "7"},
                {title: "Melba toast", isDone: false, number: "8"},

                {title: "Minced meat (125gr)", isDone: false, number: "9"},
                {title: "Tomato", isDone: false, number: "10"},
                {title: "Orange", isDone: false, number: "11"},
                {title: "Melba toast", isDone: false, number: "12"},
                {title: "Tea", isDone: false, number: "13"}
            ];
        }else{
            $scope.tuesday = localStorageService.get("tuesdayList");
        }
    };

    $scope.markAllChecked = function () {
        $scope.tuesday.forEach(function (item) {
            item.isChecked = true;
        });
    };

    $scope.uncheckAllChecked = function () {
        $scope.tuesday.forEach(function (item) {
            item.isChecked = false;
        });
    };

    $scope.checkedCount = function () {
        var itemDone = 0;
        $scope.tuesday.forEach(function (item) {
            if (item.isChecked === true) {
                itemDone += 1;
            }
        });
        return itemDone;
    };

    $scope.almostOneNotChecked = function () {
        var itemDone = $scope.checkedCount();
        if (itemDone < $scope.tuesday.length) {
            return true;
        } else
            return false;
    };

    $scope.$watch("tuesday",function(newVal,oldVal) {
        if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
            localStorageService.add("tuesdayList",angular.toJson(newVal));
        }
    },true);
});