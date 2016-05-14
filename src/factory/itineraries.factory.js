export default function ItineratiesFactory ($firebaseArray) {
    var itemsRef = new Firebase("https://boiling-inferno-2417.firebaseio.com/itineraries");
    return $firebaseArray(itemsRef);
}
