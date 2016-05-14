import angular from 'angular';
require('./chat-list.scss');

const template = `
<div class="container">Vous n'avez aucune discussion en cours...</div>
`;

const ChatListModule = angular.module('app.directives.chatlist', [])
    .component('chatList', {
        template
    });

export default ChatListModule.name;
