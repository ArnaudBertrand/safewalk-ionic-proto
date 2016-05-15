export default function UsersFactory ($firebaseArray) {
  var itemsRef = new Firebase("https://boiling-inferno-2417.firebaseio.com/users");
  const image = 'https://scontent.xx.fbcdn.net/v/t34.0-12/13236093_10208226135483744_1146075810_n.jpg?oh=06be224d895bd5dd9510374949d99b84&oe=573A364E';

  const users = [
    {
      id: 1,
      name: 'Baptiste M.',
      age: 23,
      percent: 61,
      certified: true,
      image: require('./baptiste.jpg'),
      rating: 45,
      emoticon: require('./3.png')
    },
    {
      id: 2,
      name: 'Coralie C.',
      age: 56,
      percent: 43,
      image: require('./coralie.jpg'),
      rating: 67,
      emoticon: require('./3.png')
    },
    {
      id: 3,
      name: 'Robert U.',
      age: 32,
      image: require('./robert.jpg'),
      rating: 67,
      emoticon: require('./3.png')
    }
  ];

  return {
    firebase: $firebaseArray(itemsRef),
    getAll: () => users,
    get: id => users.filter(user => user.id == id)[0]
  }
}
