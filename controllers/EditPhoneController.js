window.EditPhoneController = function($scope, $http, $routeParams, $location){
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
    




    $scope.validate = function(){
        $scope.checkEmpty =  {
            ma:false,
            ten:false,
            hang: false,
            gia: false
        };
        $scope.checkDuong =  {
            gia: false
        };
    }

    $scope.onUpdate = function(){
        $scope.validate();
        let check = true
        if(!$scope.inputValue || !$scope.inputValue.ma){
            $scope.checkEmpty.ma = true;
            check = false
        }
        if(!$scope.inputValue || !$scope.inputValue.name){
            $scope.checkEmpty.ten = true;
            check = false
        }
        if(!$scope.inputValue || !$scope.inputValue.hang){
            $scope.checkEmpty.hang = true;
            check = false
        }
        if(!$scope.inputValue || !$scope.inputValue.gia){
            $scope.checkEmpty.gia = true;
            check = false
        }
        if(Number($scope.inputValue.gia) <= 0){
            $scope.checkDuong.gia = true;
            check = false
        }

        if(check){
            var newItem = {
                ma : $scope.inputValue.ma,
                ten: $scope.inputValue.name,
                hang : $scope.inputValue.hang,
                gia : $scope.inputValue.gia,
            }
            $http.put(`${apiURL}/${$routeParams.id}`, newItem)
                .then( response => {
                    $location.path('/list-phone');
                })
        }
    }
}