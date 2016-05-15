export default function Itineraries ($firebaseArray) {
    var itemsRef = new Firebase("https://boiling-inferno-2417.firebaseio.com/itineraries");

    const image = 'https://scontent.xx.fbcdn.net/v/t34.0-12/13236093_10208226135483744_1146075810_n.jpg?oh=06be224d895bd5dd9510374949d99b84&oe=573A364E';
    const itineraries = [
        {
            user: 1,
            percent: 61,
            nbWalk: 3
        },
        {
            user: 2,
            percent: 88,
            nbWalk: 0
        },
        {
            user: 3,
            percent: 17,
            nbWalk: 0
        }
    ];

    return {
        getAll: () => itineraries,
        firebase: $firebaseArray(itemsRef)
    };
}
