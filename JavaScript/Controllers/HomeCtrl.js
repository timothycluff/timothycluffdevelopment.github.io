/**
 * Created by tim.cluff on 2/4/2017.
 */
'use strict'
portfolioApp.controller('HomeCtrl', function HomeCtrl($scope) {
    $scope.home = {
        name: 'TIMOTHY CLUFF',
        title: 'SOFTWARE DEVELOPER',
        prompt: 'SCROLL'
    };

    $(window).scroll(function () {
        $('#scrollPrompt').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow+400) {
                $(this).addClass("floating");
            }
        });
    });
});
