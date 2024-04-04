window.ListPhoneController = function($scope, $http){
    var apiURL = "http://localhost:3000/phone";
    $http.get(apiURL)
        .then(response => {
            $scope.data = response.data
        })


    // Hỏi xóa
    $scope.confirmDelete = function(id){
        $scope.idDelete = id;
    }
    // Xác nhận xóa
    $scope.onDelete = function(){
        if($scope.idDelete != undefined){
            $http.delete(`${apiURL}/${$scope.idDelete}`)
                .then( response => {
                    
                })
        }
    }
}