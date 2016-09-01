import { UserDetailsController } from './UserDetailsController';

export default {
    name: 'userDetails',
    config: {
        bindings: { user: '<' },
        templateUrl: 'src/users/components/details/UserDetails.html',
        controller: ['$document', '$log', '$mdBottomSheet', UserDetailsController]
    }
};