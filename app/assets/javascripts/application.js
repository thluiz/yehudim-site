// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .


_V_.options.flash.swf = "/videojs.swf";


var yehudim = angular.module('yehudim', []).service('dataService', function ($http) {        
        this.getFeatured = function () {
            return $http.jsonp(baseUrl + '/featured?callback=JSON_CALLBACK');
        };
        this.getTvshows = function () {
            return $http.jsonp(baseUrl + '/tvshows?callback=JSON_CALLBACK');
        };
        this.getTvshow = function (identifier) {
            return $http.jsonp(baseUrl + '/tvshow/' + identifier + '?callback=JSON_CALLBACK');
        };
        this.getEpisode = function (rabbi, identifier, video) {
            if(video != undefined) {
              return $http.jsonp(baseUrl + '/episode/' + rabbi + '/' + identifier + '/' + video + '?callback=JSON_CALLBACK');
            } else {
              return $http.jsonp(baseUrl + '/episode/' + rabbi + '/' + identifier + '?callback=JSON_CALLBACK');
            }
        };
    }).controller('sidebarCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        dataService.getTvshows().then(function(result){
            $scope.tvshows=result.data;
        });
    }]).controller('spotlightCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        dataService.getFeatured().then(function(result){
            $scope.episodes=result.data;
        });
    }]).controller('tvshowsCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        $scope.init = function() {
            dataService.getTvshows().then(function(result){
                $scope.tvshows=result.data;
            });
        };
    }]).controller('tvshowCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        $scope.init = function(identifier) {
            dataService.getTvshow(identifier).then(function(result){
                $scope.tvshow=result.data;
            });
        };
    }]).controller('episodeCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        $scope.init = function(rabbi, identifier) {
            dataService.getEpisode(rabbi, identifier).then(function(result){
                $scope.episode_exist = false;
                if(result.data != null) {
                    $scope.episode_exist = true;
                    $scope.episode=result.data;
                }
            });
        };
    }]);



