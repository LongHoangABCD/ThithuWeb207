window.DetailPhoneController = function($scope, $http, $routeParams, $location){
    $scope.init = function() {
        $scope.inputValue = {
            ma:'',
            name: '',
            hang: 'Apple',
            gia: ''
        }
    }
    $scope.init()


    var apiURL = "http://localhost:3000/phone"
    $http.get(`${apiURL}/${$routeParams.id}`)
        .then( response => {
            $scope.inputValue.ma = response.data.ma
            $scope.inputValue.name = response.data.ten
            $scope.inputValue.hang = response.data.hang
            $scope.inputValue.gia = response.data.gia
        })
    
    $scope.onReturn = function() {
        $location.path('/list-phone');
    }
    
}