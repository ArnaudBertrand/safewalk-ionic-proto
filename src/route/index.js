export const login = `
<ion-header-bar class="top">
    <h1 class="title">Items</h1>
    <button class="button button-icon ion-plus" ng-click="addItem()">
    </button>
</ion-header-bar>
<ion-view>
    <h1>Hello world</h1>
    <button class="button" ng-click="login()" ng-if="!$root.authData">Login</button>
    <button class="button" ng-click="logout()" ng-if="$root.authData">Logout</button>
    <ion-list>
        <ion-checkbox ng-repeat="item in items | orderBy:'name' | filter:mine" ng-model="item.checked"
                      ng-change="change(item)">{{item.name}}
        </ion-checkbox>
    </ion-list>
</ion-view>
`;

export const results = `
<ion-view>
    <results-header></results-header>
    <results-card-manager></results-card-manager>
</ion-view>
`;

export const search = `
<ion-view>
    <search-header></search-header>
    <search-form></search-form>
</ion-view>
`;
