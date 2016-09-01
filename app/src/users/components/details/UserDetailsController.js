import {UserSheetController} from './UserSheetController';

export class UserDetailsController {
    constructor($document, $log, $mdBottomSheet) {
        this.$document = $document;
        this.$log = $log;
        this.$mdBottomSheet = $mdBottomSheet;
    }

    /**
     * Show the bottom sheet
     */
    share() {
        this.$mdBottomSheet.show({
            parent: angular.element(document.getElementById('content')),
            templateUrl: 'src/users/components/details/ContactSheet.html',
            controller: UserSheetController,
            controllerAs: "$ctrl",
            bindToController : true
        }).then((clickedItem) => {
            this.$log.debug( clickedItem.name + ' clicked!');
        });
    }
}