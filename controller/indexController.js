window.indexController = function($scope, $http){
    $scope.title = "Đây là trang danh sách nhân viên"
    
    const apiEmployee = "http://localhost:3000/employee"

    $http.get(apiEmployee)
    .then(function(response){
        if (response.status ==200) {
            $scope.listEmployee = response.data
        }
    })
    $scope.deleteEmployee = function(id){
        let confirm = window.confirm("Có muốn xóa không")
        if (confirm) {
            $http.delete(`${apiEmployee}/${id}`)
            .then(function(response){
                if (response.status == 200) {
                    alert("Xóa xong")
                }
            })
        }
    }
}