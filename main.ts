/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ella An
 * Created on: Oct 2024
 * This program counts down to 4
*/

// variables
let loopCounter = 4

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// button a pressed
input.onButtonPressed(Button.A, function () { 
    while (loopCounter > 0) {
        basic.showNumber(loopCounter)
        basic.pause(500)
        loopCounter = loopCounter - 1
    }
})