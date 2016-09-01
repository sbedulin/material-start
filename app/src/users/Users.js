// Load the custom app ES6 modules

import UsersDataService from './services/UsersDataService';
import UserDetails from './components/details/UserDetails';
import UserList from './components/list/UserList';

// Define the Angular 'users' module

export default angular
    .module("users", ['ngMaterial'])
    .component(UserDetails.name, UserDetails.config)
    .component(UserList.name, UserList.config)
    .service("UsersDataService", UsersDataService);
