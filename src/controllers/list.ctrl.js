export default function ListCtrl ($scope, Items, Auth, $ionicPopup) {
  $scope.items = Items;
  $scope.data = {};

  $scope.addItem = function () {
    if ($scope.authData) {
      var myPopup = $ionicPopup.show({
        template: '<input type="text" ng-model="data.name">',
        title: 'Enter Text',
        scope: $scope,
        buttons: [
          {text: 'Cancel'},
          {
            text: '<b>Create</b>',
            type: 'button-positive',
            onTap: function (e) {
              if (!$scope.data.name) {
                //don't allow the user to close unless he enters wifi password
                e.preventDefault();
              } else {
                return $scope.data.name;
              }
            }
          }
        ]
      });

      myPopup.then(function (name) {
        if (name) {
          $scope.items.$add({
            name: name,
            checked: false,
            userId: $scope.authData.uid
          });
        }
      });
    }
  };

  $scope.change = function (item) {
    if ($scope.authData && $scope.authData.uid === item.userId) {
      $scope.items.$save(item);
    } else {
      item.checked = !item.checked;
    }
  };

  $scope.login = function () {
    if ($scope.authData) {
      console.log('Already Logged in');
    } else {
      Auth.$authWithOAuthPopup("facebook").then(function (authData) {
        console.log("Logged in as 2:", authData);
      }).catch(function (error) {
        console.log("Authentication failed:", error);
      });
    }
  };

  $scope.logout = function () {
    Auth.$unauth();
  };

  $scope.mine = function (item) {
    return $scope.authData && item.userId == $scope.authData.uid;
  };

}
