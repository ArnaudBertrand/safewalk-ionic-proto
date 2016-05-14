export const template = `
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
