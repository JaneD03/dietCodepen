'use strict';

app.controller('wednesdayCtrl', function ($scope, localStorageService) {

    $scope.initWed = function () {
        $scope.wednesday = [];

        if (!localStorageService.get("wednesdayList")) {
            $scope.wednesday = [
                {title: "Coffee", isDone: false, number: "1"},
                {title: "Orange", isDone: false, number: "2"},
                {title: "Melba toast", isDone: false, number: "3"},

                {title: "Orange", isDone: false, number: "4"},
                {title: "Boiled egg", isDone: false, number: "5"},
                {title: "Yogurt", isDone: false, number: "6"},
                {title: "Head Of Lettuce", isDone: false, number: "7"},

                {title: "Minced meat (125gr)", isDone: false, number: "8"},
                {title: "Orange", isDone: false, number: "9"},
                {title: "Melba toast", isDone: false, number: "10"},
                {title: "Tea", isDone: false, number: "11"}
            ];
        }else{
            $scope.wednesday = localStorageService.get("wednesdayList");
        }
    };

    $scope.markAllChecked = function () {
        $scope.wednesday.forEach(function (item) {
            item.isChecked = true;
        });
    };

    $scope.uncheckAllChecked = function () {
        $scope.wednesday.forEach(function (item) {
            item.isChecked = false;
        });
    };

    $scope.checkedCount = function () {
        var itemDone = 0;
        $scope.wednesday.forEach(function (item) {
            if (item.isChecked === true) {
                itemDone += 1;
            }
        });
        return itemDone;
    };

    $scope.almostOneNotChecked = function () {
        var itemDone = $scope.checkedCount();
        if (itemDone < $scope.wednesday.length) {
            return true;
        } else
            return false;
    };

    $scope.$watch("wednesday",function(newVal,oldVal) {
        if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
            localStorageService.add("wednesdayList",angular.toJson(newVal));
        }
    },true);
});