var SERVER_URL = "http://private-9aad-note10.apiary-mock.com/"; 

angular.module('notesApp').controller('notesController',  ['$scope', '$stateParams', '$http', '$state', function($scope, $stateParams, $http, $state) {
    $scope.getNotes = function() {
		$http.get(SERVER_URL + 'notes')
                .success(function(data) {				       
                        $scope.notes = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
        });
	};
	
	$scope.getNote = function() {	    
		$http.get(SERVER_URL + 'notes/' + $stateParams.noteId)
                .success(function(data) {				       
                        $scope.note = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
        });
	 }
	 
	 $scope.delete = function(id) {
		 $http.delete(SERVER_URL + 'notes/' + id)
                        .success(function(data) {
                                $scope.getNotes();
								$state.go('notes');
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
	 };
	 
	 $scope.add = function() {
	    $http.post(SERVER_URL + 'notes', $scope.note)
                        .success(function(data) {                              
                                $scope.getNotes();
								$state.go('notes');
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
	 }
	 
	 $scope.edit = function(id) {
	    $http.put(SERVER_URL + 'notes/' + id, $scope.note)
                        .success(function(data) {                              
                                $scope.getNotes();
								$state.go('notes');
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
	 }
	 
	 
	    
}]);

	
