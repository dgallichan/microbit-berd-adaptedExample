"""

Walk

"""
"""

Turn

"""
"""

All servos to home positions

"""
"""

Code for turning

"""
"""

Code for walking

"""
"""

Servo connections - looking with screen towards you

P3 - Back left

P4 - Back right

P6 - Front right

P7 - Front Left

P9 - Left middle (walking) 

P10 - right middle (turning)

"""
"""

Step 1:

- back left and front right legs up

- slide side forward

- legs back down

"""
"""

Step 2:

- Lift back right and fronnt left legs up

- turn other side of body to meet

- put legs back down

"""
"""

Step 2:

- back right and front left legs up

- slide other side forward to meet

- legs back down

"""

def on_button_pressed_a():
    pins.servo_write_pin(AnalogPin.P9, 10)
input.on_button_pressed(Button.A, on_button_pressed_a)

"""

Step 1:

- lift back left and front right legs up

- turn side of body

- put legs back down

"""

def on_button_pressed_ab():
    pins.servo_write_pin(AnalogPin.P10, 110)
    pins.servo_write_pin(AnalogPin.P3, 155)
    pins.servo_write_pin(AnalogPin.P6, 5)
    pins.servo_write_pin(AnalogPin.P7, 10)
    pins.servo_write_pin(AnalogPin.P4, 160)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    pins.servo_write_pin(AnalogPin.P9, 180)
input.on_button_pressed(Button.B, on_button_pressed_b)
