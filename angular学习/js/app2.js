angular.module('todoApp', [])
  .controller('TodoControl', ['$scope', function ($scope) {
    $scope.newTodo = '';

    $scope.add = function () {
      if ($scope.newTodo === '') {
        alert("输入框不能为空")
        return;
      }

      var td = $scope.todos;
      $scope.todos = [];

      var tod = {
        todo:$scope.newTodo,
        isChecked:false
      }
      td.unshift(tod);

      $scope.todos = td;
    }

    $scope.todos = [
      {todo : '吃饭', isChecked : false},
      {todo : '睡觉', isChecked : false},
      {todo : '打豆豆', isChecked : false}
    ]

    $scope.delete = function () {
      var arr = $scope.todos;
      $scope.todos = [];
      arr.forEach(function (val,key) {
        if(!val.isChecked){
          $scope.todos.unshift(val)
        }
      })


    }


  }])