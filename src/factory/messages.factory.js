export default function MessagesFactory ($firebaseArray, $timeout, Users) {
  const itemsRef = new Firebase("https://boiling-inferno-2417.firebaseio.com/messages");

  const messages = [];

  function send(message, id) {
    messages.push({
      content: message,
      to: id,
      left: true
    });

    //TODO
    $timeout(() => {
      messages.push({
        from: id,
        content: 'Oui bien sur !',
        right: true
      });
    }, 3000);
  }

  function getAllFrom(id) {
    return messages.filter(mess => mess.from == id || mess.to == id);
  }
  
  function getAll() {
    return messages;
  }

  return {
    send,
    getAllFrom,
    getAll,
    firebase: $firebaseArray(itemsRef)
  };
}
