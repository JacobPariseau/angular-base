import angular from 'angular';
import LoginController from './login.controller';

angular.module('app')
.controller('LoginController', LoginController)
.config(function ($stateProvider, $urlRouterProvider) {
  'use strict';

  /** Route definition */
  $stateProvider.state('index', {
    url: '/',
    template: require('./login.html'),
    controller: 'LoginController as vm'
  });

  $urlRouterProvider.otherwise('/index');
});
