/**
 * Created by tim.cluff on 2/4/2017.
 */
'use strict'
portfolioApp.controller('SkillsCtrl', function SkillsCtrl($scope) {
    $scope.skills = {
        javaTitle: 'Java',
        jsTitle: 'JavaScript',
        cTitle: 'C#',
        swiftTitle: 'Swift'
    };

    $scope.jBody = 'I am currently a full stack Java developer at Fishbowl Inventory located in Orem, Utah. In high school, I got the opportunity to take AP Computer Science which is where I obtained my knowledge of object oriented programming.';
    $scope.jsBody = 'At my Web Developer Job, I get the chance to do a lot with Angular JS. What I work on is built on Angular using controllers and components within the controllers.';
    $scope.cBody = 'I took my very first programming class in C#. The class I took was Intro to Computer Science and I took the class my Junior year of high school. Now I am a freshman at Utah Valley University taking CS 1400 which is in C#.';
    $scope.sBody = 'I will sometimes do a little bit of Swift here and there, but not a whole lot. In AP Computer Science my final project was a game that I made in Swift which involved physics, which was interesting to play with.'
});