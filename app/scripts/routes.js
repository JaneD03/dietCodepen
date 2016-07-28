'use strict';

/**
* @ngdoc overview
* @name application
* @description
* # application
*
* Routes module of the application.
*/
app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    /**
    * AUTH login/register
    * @type {String}
    */


    /**
    * Application Routes
    * @type {String}
    */
    .state('app', {
        url: '/',
        abstract: true,
        templateUrl: "./views/layouts/default.html"
    })


    .state('app.home', {
        url: '',
        views: {
            'appContent' :{
                templateUrl: './views/monday.html'
            }
        }
    })

    .state('app.monday', {
        url: 'monday',
        views: {
            'appContent' :{
                templateUrl: './views/monday.html'
            }
        }
    })
    .state('app.tuesday', {
        url: 'tuesday',
        data : {
            cssClassnames : 'tuesday'
        },
        views: {
            'appContent' :{
                templateUrl: './views/tuesday.html'
            }
        }
    })
    .state('app.wednesday', {
        url: 'wednesday',
        data : {
            cssClassnames : 'wednesday'
        },
        views: {
            'appContent' :{
                templateUrl: './views/wednesday.html'
            }
        }
    })
    .state('app.thursday', {
        url: 'thursday',
        data : {
            cssClassnames : 'thursday'
        },
        views: {
            'appContent' :{
                templateUrl: './views/thursday.html'
            }
        }
    })
    .state('app.friday', {
        url: 'friday',
        data : {
            cssClassnames : 'friday'
        },
        views: {
            'appContent' :{
                templateUrl: './views/friday.html'
            }
        }
    });






    /**
    * Default Route
    */
    $urlRouterProvider
    .otherwise('/');

});
