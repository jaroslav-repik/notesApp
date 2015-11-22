var app = angular.module('notesApp', ['ui.router', 'pascalprecht.translate']);
app.config(function ($stateProvider, $urlRouterProvider, $translateProvider) {

     $urlRouterProvider.when("", "/notes");

     $stateProvider
        .state("notes", {
            url: "/notes",
            templateUrl: "notes.html",
			controller: 'notesController'
        })
        .state("notes.add", {
            url:"/add",
            templateUrl: "add.html",
			controller: 'notesController'
        })
        .state("notes.edit", {
            url:"/edit/:noteId",
            templateUrl: "edit.html",
			controller: 'notesController'
        });

	
	  $translateProvider.useStaticFilesLoader({
		prefix: 'i18n/',
		suffix: '.json'
	  });
	  $translateProvider.preferredLanguage('en');		
});

