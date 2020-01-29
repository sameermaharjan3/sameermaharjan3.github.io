"use strict";
$(document).ready(function () {

    // Boolean to track whether the game has started or not
    // Initially the game has not started
    let gameStarted = false;

    //Event handler for clicking start button which is letter 'S'
    $("#start").click(function () {
        $(".boundary").removeClass("youlose");
        $("#status").text("Move the mouse without touching boundary");
        gameStarted = true;
    });

    // Player lose the game if the mouse pointer goes outside of the maze
    $("#maze").mouseleave(function () {
        if (gameStarted === true) {
            $("#status").text("You Lose ! You can't go outside the maze.");
            $(".boundary").addClass("youlose");
            gameStarted = false;
        }
    });

    // If the mouse touches the boundary, the game is lost
    $(".boundary").mouseover(function () {
        if (gameStarted === true) {
            $("#status").text("You Lose !");
            $(".boundary").addClass("youlose");
            gameStarted = false;
        }
    });

    // Condition to win the game is to reach the end, which is letter 'E'
    $("#end").mouseover(function () {
        if (gameStarted === true) {
            $("#status").text("You Win!:]");
            gameStarted = false;
        }
    });


});