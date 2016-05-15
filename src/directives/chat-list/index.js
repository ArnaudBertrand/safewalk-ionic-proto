import angular from 'angular';
require('./chat-list.scss');

function controller($scope, Messages, Users, $ionicHistory, $state) {
  $scope.goTo = userid => {
    $ionicHistory.nextViewOptions({
      disableAnimate: true,
      disableBack: true
    });
    $state.go('chat', {userid});
  };

  $scope.$watchCollection(
      () => Messages.getAll(),
      messages => {
        const pres = messages.reduce((prev, next) => {
          // From
          let idx = -1;
          for(let i = 0; i < prev.length; i++){
            if(prev[i].user.id == next.from || prev[i].user.id == next.to) {
              idx = i;
              break;
            }
          };

          if(idx > -1) {
            prev[idx] = {user: Users.get(next.from || next.to), content: next.content};
          } else {
            prev.push({user: Users.get(next.from || next.to), content: next.content});
          }

          return prev;
        }, []);

        $scope.chats = pres;
      }
  );
}

const template = `
<div class="empty-container" ng-if="!chats || !chats.length">
    <i class="ion icon ion-chatbox-working"></i>
    <div>Vous n'avez aucune discussion en cours...</div>
</div>

<div class="list" ng-if="chats && chats.length">
    <a class="item item-avatar" ng-repeat="chat in chats" ng-click="goTo(chat.user.id)">
      <img ng-src="{{chat.user.image}}">
      <h2>{{chat.user.name}}</h2>
      <p>{{chat.content}}</p>
    </a>
</div>
`;

const ChatListModule = angular.module('app.directives.chatlist', [])
    .component('chatList', {
      template,
      controller
    });

export default ChatListModule.name;
