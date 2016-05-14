export default function RatingsFactory ($firebaseArray) {
    var itemsRef = new Firebase("https://boiling-inferno-2417.firebaseio.com/ratings");
    return $firebaseArray(itemsRef);
}
