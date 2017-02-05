/**
 * Created by tim.cluff on 2/4/2017.
 */
'use strict'
portfolioApp.controller('NavigationCtrl',
function NavigationCtrl($scope) {
    $scope.menu = {
        pageOne: 'Home',
        pageTwo: 'About',
        pageThree: 'Skills',
        pageFour: 'Education',
        pageFive: 'Contact'
    }
});