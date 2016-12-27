// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('register-first', {
    url: '/register-first',
    templateUrl: 'templates/register-first.html',
    controller: 'ChatsCtrl'
  })

  .state('register-second', {
    url: '/register-second',
    templateUrl: 'templates/register-second.html',
    controller: 'ChatsCtrl'
  })

  .state('register-third', {
    url: '/register-third',
    templateUrl: 'templates/register-third.html',
    controller: 'ChatsCtrl'
  })


  .state('register-success', {
    url: '/register-success',
    templateUrl: 'templates/register-success.html',
    controller: 'ChatsCtrl'
  })

  .state('tab.trans-record', {
    url: '/trans-record',
    views: {
      'tab-chats': {
        templateUrl: 'templates/trans-record.html',
        controller: 'ChatsCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.account-detail', {
    url: '/account-detail',
    views: {
      'tab-account': {
        templateUrl: 'templates/account-detail.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('tab.account-sign', {
    url: '/account-sign',
    views: {
      'tab-account': {
        templateUrl: 'templates/account-sign.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.report', {
    url: '/report',
    views: {
      'tab-chats': {
        templateUrl: 'templates/report.html',
        controller: 'AccountCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/chats');

});
