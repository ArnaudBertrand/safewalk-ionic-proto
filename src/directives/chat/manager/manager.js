import angular from 'angular';
require('./manager.scss');

function controller($scope, $timeout) {
  $scope.messages = [
    {
      img: 'http://pbs.twimg.com/profile_images/674428042626908160/CbBgASTK.jpg',
      content: 'Salut, moi c\'est Alicia, je peux te joindre sur ton trajet? Je vais a Jean medecin',
      right: true
    }
  ];

  $scope.send = message => {
    $scope.messages.push({
      content: message,
      img: 'http://media.eliteglobaldating.com/modmysite/getphoto.php?height=350&width=300&proprotion=false&imagepath=/home1/mediaegd/public_html/media/images/profile/126/474/orig_13368039821120.jpg',
      left: true
    });
  };
}

const template = `
<chat-message ng-repeat="message in messages" message="message"></chat-message>
<chat-form send="send(message)"></chat-form>
`;

export default angular.module('app.directives.chat.manager', [])
    .component('chatManager', {
      template,
      controller
    })
    .name;
