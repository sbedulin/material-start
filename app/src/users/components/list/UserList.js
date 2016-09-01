import { UserListController } from './UserListController';

export default {
    name: 'userList',
    config: {
        bindings: { users: '<', selectedUser: '<', onSelected: '&' },
        templateUrl: 'src/users/components/list/UserList.html',
        controller: UserListController
    }
};