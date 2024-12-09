"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *
from time import *

loop_counter = 4

display.clear()
display.show(Image.HAPPY)

if button_a.is_pressed():
    while loop_counter >= 0:
        display.show(loop_counter)
        sleep(1)

        if loop_counter == 4:
            