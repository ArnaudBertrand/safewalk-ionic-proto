import Form from './search-form/form';
import Header from './search-header/header';

import angular from 'angular';

const SearchModule = angular.module('app.directives.search', [
    Form,
    Header
]);

export default SearchModule.name;
