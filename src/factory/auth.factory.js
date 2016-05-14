export default function AuthFactory ($firebaseAuth, $rootScope, $state) {
  var ref = new Firebase("https://boiling-inferno-2417.firebaseio.com");
  var Auth = $firebaseAuth(ref);
  Auth.$onAuth(function (authData) {
    $rootScope.authData = authData;
      if (authData) {
          // redirect -> search
          $state.go('search');
      } else {
          // redirect -> login
          $state.go('login');
      }
  });
  return Auth;
}
