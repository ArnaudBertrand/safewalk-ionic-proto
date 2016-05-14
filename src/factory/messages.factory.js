export default function MessagesFactory ($firebaseArray) {
    var itemsRef = new Firebase("https://boiling-inferno-2417.firebaseio.com/messages");
    return $firebaseArray(itemsRef);
}
