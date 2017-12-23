(function () {
  'use strict';

  angular
    .module('listings')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Listings',
      state: 'listings',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'listings', {
      title: 'List Listings',
      state: 'listings.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'listings', {
      title: 'Create Listing',
      state: 'listings.create',
      roles: ['user']
    });
  }
}());
