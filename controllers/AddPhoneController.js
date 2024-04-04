window.AddPhoneController = function($scope, $http, $location){
    var apiURL = "http://localhost:3000/phone"
    $scope.init = function() {
        $scope.inputValue = {
            ma:'',
            name: '',
            hang: 'Apple',
            gia: ''
        }
    }
    $scope.init()


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

    $scope.onSubmit = function() {
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
            $http.post(apiURL, newItem)
                .then( response => {
                    $location.path('/list-phone');
                })
        }
    }
}