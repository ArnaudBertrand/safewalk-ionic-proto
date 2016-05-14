export default function AuthFactory($firebaseAuth, $rootScope, $state, Users, $timeout) {
    var ref = new Firebase("https://boiling-inferno-2417.firebaseio.com");
    var Auth = $firebaseAuth(ref);
    Auth.$onAuth(function (authData) {
        $rootScope.authData = authData;
        if (authData) {
            // if the user does not exists in the database, then create it
            Users
                .$loaded()
                .then(() => {
                    let users = Users.filter((user) => {
                        return user.userId === authData.facebook.cachedUserProfile.id;
                    });
                    if (users.length === 0) {
                        Users
                            .$add({
                                userId: authData.facebook.cachedUserProfile.id,
                                firstname: authData.facebook.cachedUserProfile.first_name,
                                lastname: authData.facebook.cachedUserProfile.last_name,
                                email: authData.facebook.cachedUserProfile.email
                            });
                    }
                })
                .catch((err) => {
                    console.log('err while loading data', err);
                });
            // redirect -> search
            $state.go('search');
        } else {
            // redirect -> login
            $state.go('login');
        }
    });
    return Auth;
}
