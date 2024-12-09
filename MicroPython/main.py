"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *
import neopixel
from time import *

# variable
loop_counter = 4

# setup
display.clear()
display.show(Image.HAPPY)


# when button a is pressed
if button_a.is_pressed():
    if loop_counter >= 0:
        True

    while True:
        display.show(loop_counter)
        sleep(1)

        # loop counter is 4
        if loop_counter == 4:
            np = neopixel.NeoPixel(pin16, 4)
            np[0] = (0, 128, 0)
            np[1] = (0, 128, 0)
            np[2] = (0, 128, 0)
            np[3] = (0, 128, 0)
            np.show()
            display.show(Image.HAPPY)

        # loop counter is 3
        if loop_counter == 3:
            np = neopixel.NeoPixel(pin16, 4)
            np[0] = (0, 128, 0)
            np[1] = (0, 128, 0)
            np[2] = (0, 128, 0)
            np[3] = (0, 0, 0)
            np.show()
            display.show(Image.HAPPY)

        # loop counter is 2
        if loop_counter == 2:
            np = neopixel.NeoPixel(pin16, 4)
            np[0] = (0, 128, 0)
            np[1] = (0, 128, 0)
            np[2] = (0, 0, 0)
            np[3] = (0, 0, 0)
            np.show()
            display.show(Image.HAPPY)

        # loop counter is 1
        if loop_counter == 1:
            np = neopixel.NeoPixel(pin16, 4)
            np[0] = (0, 128, 0)
            np[1] = (0, 0, 0)
            np[2] = (0, 0, 0)
            np[3] = (0, 0, 0)
            np.show()
            display.show(Image.HAPPY)

        # loop counter is 0
        if loop_counter == 0:
            np = neopixel.NeoPixel(pin16, 4)
            np[0] = (0, 0, 0)
            np[1] = (0, 0, 0)
            np[2] = (0, 0, 0)
            np[3] = (0, 0, 0)
            np.show()
            display.show(Image.HAPPY)

        loop_counter = loop_counter - 1
        sleep(0.5)
