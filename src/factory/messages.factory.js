export default function MessagesFactory ($firebaseArray, $timeout, Users) {
  const itemsRef = new Firebase("https://boiling-inferno-2417.firebaseio.com/messages");

  const messages = [];

  function send(message, id) {
    messages.push({
      content: message,
      to: id,
      left: true
    });

    $timeout(() => {
      messages.push({
        from: id,
        content: 'Oui bien sur !',
        right: true
      });
    }, 3000);

    console.log(messages);
  }

  function getAllFrom(id) {
    return messages.filter(mess => mess.from == id || mess.to == id);
  }
  return {
    send,
    getAllFrom,
    firebase: $firebaseArray(itemsRef)
  };
}
