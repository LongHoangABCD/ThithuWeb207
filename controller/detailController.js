window.detailController = function ($scope, $http, $routeParams, $location) {
    $scope.title = "Đây là trang chi tiết"

    let apiEmployee = "http://localhost:3000/employee/"

    $http.get(apiEmployee + $routeParams.id)
        .then(function (response) {
            $scope.employee = response.data
            $scope.employee.ngay_sinh = new Date(response.data.ngay_sinh)
        })

    $scope.returnPage = function () {
        $location.path("/list-employee")
    }

}