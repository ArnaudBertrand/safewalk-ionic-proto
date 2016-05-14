export default function UsersFactory ($firebaseArray) {
    var itemsRef = new Firebase("https://boiling-inferno-2417.firebaseio.com/users");
    return $firebaseArray(itemsRef);
}
