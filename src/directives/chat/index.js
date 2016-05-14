import angular from 'angular';
import Form from './form/form';
import Manager from './manager/manager';
import Message from './message/message';

const CommonModule = angular.module('app.directives.chat', [
  Form,
  Manager,
  Message
]);

export default CommonModule.name;
