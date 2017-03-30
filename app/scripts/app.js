function config($stateProvider, $locationProvider) {
		console.log("angular working")

     $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
	
	$stateProvider
         .state('landing', {
             url: '/',
//		     controller: 'LandingCtrl as landing',
//             templateUrl: '/templates/landing.html'
         })
	 
 }

(function() {
	
	 angular
         .module('bloc-chat', ['ui.router'])
         .config(config);
 })();
