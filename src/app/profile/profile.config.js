import angular from 'angular';
import ProfileController from './profile.controller';

angular.module('app')
.controller('ProfileController', ProfileController)
.config(function ($stateProvider) {
  'use strict';

  /** Route definition */
  $stateProvider.state('profile', {
    url: '/profile',
    template: require('./profile.html'),
    controller: 'ProfileController as vm'
  });

});
