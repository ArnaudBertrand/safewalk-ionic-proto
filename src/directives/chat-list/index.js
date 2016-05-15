import angular from 'angular';
require('./chat-list.scss');

function controller($scope, Messages, Users) {
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
<div class="empty-container" ng-if="!chats">Vous n'avez aucune discussion en cours...</div>

<div class="list" ng-if="chats">
    <a class="item item-avatar" ng-repeat="chat in chats">
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
