import angular from 'angular';
require('./header.scss');

const template = `
<div class="bar bar-header">
  <h1 class="title">Trouver un safe walk</h1>
</div>

<div class="tabs-striped tabs-top">
  <div class="tabs">
    <a class="tab-item active" href="#">
      <i class="icon ion-search"></i>
      Recherche
    </a>
    <a class="tab-item" href="#">
      <i class="icon ion-chatbubble-working"></i>
      Chat
    </a>
    <a class="tab-item" href="#">
      <i class="icon ion-map"></i>
      Mes itineraires
    </a>
  </div>
</div>
`;

export default angular.module('app.directives.common.header', [])
    .component('commonHeader', {
      template
    })
    .name;
