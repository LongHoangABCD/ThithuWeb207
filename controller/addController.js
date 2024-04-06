window.addController = function ($scope, $http, $location) {
  $scope.title = "Đây là trang thêm nhân viên";

  $scope.addEmployee = function () {
    const apiEmployee = "http://localhost:3000/employee";
    let check = true;

    $scope.validate = {
        ho_ten: '',
        sdt: '',
        email: '',
        chuc_vu: '',
        ngay_sinh: '',
    }

    regexEmail = /^\S+@\S+\.\S+$/

    if (!$scope.employee || !$scope.employee.ho_ten) {
      check = false;
      $scope.validate.ho_ten = 'Vui lòng nhập họ tên'
    }
    if (!$scope.employee || !$scope.employee.sdt) {
      check = false;
      $scope.validate.sdt = 'Vui lòng nhập số đt'
    }else if(!$scope.employee || isNaN($scope.employee.sdt)){
        check = false;
        $scope.validate.sdt = 'Số điện thoại phải là số'
    }
    if (!$scope.employee || !$scope.employee.email) {
      check = false;
      $scope.validate.email = 'Vui lòng nhập email'
    }else if(!$scope.employee || !regexEmail.test($scope.employee.email)){
        check = false;
        $scope.validate.email = 'Bạn nhập chưa đúng định dạng email'
    }
    if (!$scope.employee || !$scope.employee.chuc_vu) {
      check = false;
      $scope.validate.chuc_vu = 'Vui lòng chọn chức vụ'
    }
    if (!$scope.employee || !$scope.employee.ngay_sinh) {
      check = false;
      $scope.validate.ngay_sinh = 'Vui lòng nhập ngày sinh'
    }

    if (check) {
      let formatDate = $scope.employee.ngay_sinh.toISOString().split("T")[0];
      let newEmployee = {
        ho_ten: $scope.employee.ho_ten,
        sdt: $scope.employee.sdt,
        email: $scope.employee.email,
        chuc_vu: $scope.employee.chuc_vu,
        ngay_sinh: formatDate,
      };
      console.log(newEmployee);
      $http.post(apiEmployee, newEmployee).then(function (response) {
        if (response.status == 201) {
          alert("thêm thành công");
          $location.path("/list-employee");
        }
      });
    } else {
      alert("Có lỗi khi nhập dữ liệu");
    }
  };
};
