export default function ItemsFactory ($firebaseArray) {
  var itemsRef = new Firebase("https://boiling-inferno-2417.firebaseio.com/items");
  return $firebaseArray(itemsRef);
}
