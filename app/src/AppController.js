export class AppController {
  constructor(UsersDataService, $mdSidenav) {
    this.$mdSidenav = $mdSidenav;
    this.selected     = null;
    this.users        = [ ];

    // Load all registered users

    UsersDataService
        .loadAllUsers()
        .then( ( users ) => {
          this.users    = [].concat(users);
          this.selected = users[0];
        });
  }

  /**
   * Hide or Show the 'left' sideNav area
   */
  toggleUsersList() {
    this.$mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  selectUser ( user ) {
    this.selected = angular.isNumber(user) ? this.users[user] : user;
  }
}

AppController.$inject = ['UsersDataService', '$mdSidenav'];