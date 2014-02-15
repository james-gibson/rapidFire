/**
 * Created by James on 2/15/14.
 */
var rapidFireApp = angular.module('rapidFireApp', []);

rapidFireApp.controller('MenuListCtrl', function ($scope) {
    $scope.actions = [
        {'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'}
    ];
});