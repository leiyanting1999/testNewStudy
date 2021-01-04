angular.module('myapp', [])
  .controller('NoteController', ['$scope', function ($scope) {
    $scope.message = '';

    $scope.getCount = function () {
      if ($scope.message.length > 100) {
        $scope.message = $scope.message.slice(0, 100);
      }
      return 100 - $scope.message.length;
    }

    $scope.save = function () {
      if($scope.message === ""){
        alert("请输入后再保存")
        return;
      }
      alert("保存成功")
      localStorage.setItem('nr', JSON.stringify($scope.message))
      $scope.message = "";
    }

    $scope.read = function(){
      var nr = localStorage.getItem('nr');
      if (nr === null){
        alert("您未保存任何数据")
        return;
      }
      $scope.message = JSON.parse(nr);

      alert("读取数据成功")
    }

    $scope.delete = function () {
      $scope.message = "";
      localStorage.removeItem('nr');
    }


  }])