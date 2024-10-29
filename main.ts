/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ella An
 * Created on: Oct 2024
 * This program counts down to 4
*/

// variables
let loopCounter = 4
let neopixelStrip: neopixel.Strip = null

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// button a pressed
input.onButtonPressed(Button.A, function () { 
    while (loopCounter >= 0) {
        basic.showNumber(loopCounter)
        basic.pause(500)

        // turn lights on
        if (loopCounter = 4) {
            neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.show()
            basic.showIcon(IconNames.Happy)
        }

        if (loopCounter = 3) {
            neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
            basic.showIcon(IconNames.Happy)
        }

        if (loopCounter = 2) {
            neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
            basic.showIcon(IconNames.Happy)
        }

        if (loopCounter = 1) {
            neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
            basic.showIcon(IconNames.Happy)
        }
        
        if (loopCounter = 0) {
            neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
            basic.showIcon(IconNames.Happy)
        }
        
        loopCounter = loopCounter - 1
        basic.pause(500)
    }
})