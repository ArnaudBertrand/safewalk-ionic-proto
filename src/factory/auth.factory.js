export function AuthFactory ($firebaseAuth, $rootScope) {
  var ref = new Firebase("https://boiling-inferno-2417.firebaseio.com");
  var Auth = $firebaseAuth(ref);
  Auth.$onAuth(function (authData) {
    $rootScope.authData = authData;
  });
  return Auth;
}
