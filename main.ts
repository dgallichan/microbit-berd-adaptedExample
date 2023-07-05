function turnOffServos () {
    kitronik_i2c_16_servo.servoOff(kitronik_i2c_16_servo.Servos.Servo1)
    kitronik_i2c_16_servo.servoOff(kitronik_i2c_16_servo.Servos.Servo2)
    kitronik_i2c_16_servo.servoOff(kitronik_i2c_16_servo.Servos.Servo3)
    kitronik_i2c_16_servo.servoOff(kitronik_i2c_16_servo.Servos.Servo4)
    kitronik_i2c_16_servo.servoOff(kitronik_i2c_16_servo.Servos.Servo5)
    kitronik_i2c_16_servo.servoOff(kitronik_i2c_16_servo.Servos.Servo6)
    kitronik_i2c_16_servo.servoOff(kitronik_i2c_16_servo.Servos.Servo7)
    kitronik_i2c_16_servo.servoOff(kitronik_i2c_16_servo.Servos.Servo8)
    kitronik_i2c_16_servo.servoOff(kitronik_i2c_16_servo.Servos.Servo9)
    kitronik_i2c_16_servo.servoOff(kitronik_i2c_16_servo.Servos.Servo10)
    kitronik_i2c_16_servo.servoOff(kitronik_i2c_16_servo.Servos.Servo11)
    kitronik_i2c_16_servo.servoOff(kitronik_i2c_16_servo.Servos.Servo12)
    kitronik_i2c_16_servo.servoOff(kitronik_i2c_16_servo.Servos.Servo13)
    kitronik_i2c_16_servo.servoOff(kitronik_i2c_16_servo.Servos.Servo14)
    kitronik_i2c_16_servo.servoOff(kitronik_i2c_16_servo.Servos.Servo15)
    kitronik_i2c_16_servo.servoOff(kitronik_i2c_16_servo.Servos.Servo16)
}
function UP1 () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, minVal)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo13, maxVal)
    basic.pause(200)
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        WALK()
    }
    turnOffServos()
})
function DOWN1 () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo13, 90)
    basic.pause(200)
}
function ROTATE () {
    UP1()
    ROT1()
    DOWN1()
    UP2()
    ROT2()
    DOWN2()
}
function ROT1 () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, 90)
    basic.pause(200)
}
function WALK () {
    UP1()
    FOR1()
    DOWN1()
    UP2()
    FOR2()
    DOWN2()
}
function FOR2 () {
    // You would want this to be 0, but something gets stuck on the robot past ~60 degrees
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo10, 60)
    basic.pause(200)
}
// * DG - Servo Assignments
// 
// * 1 -> BL
// 
// * 2 -> FL
// 
// * 13 -> FR
// 
// * 14 -> BR
// 
// * 6 -> Middle Rotation (Right-hand servo)
// 
// * 10 -> Middle Forward/Backward (left-hand servo)
input.onButtonPressed(Button.AB, function () {
	
})
function UP2 () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, minVal)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo14, maxVal)
    basic.pause(200)
}
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        ROTATE()
    }
    turnOffServos()
})
function DEFAULT () {
    // // * DG - Servo Assignments
    // //
    // // * 1 -> BL
    // //
    // // * 2 -> FL
    // //
    // // * 13 -> FR
    // //
    // // * 14 -> BR
    // //
    // // * 6 -> Middle Rotation (Right-hand servo)
    // //
    // // * 10 -> Middle Forward/Backward (left-hand servo)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo13, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo14, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo10, 90)
    // It seems you would want this to be set to 180 to keep the body straight, but actually seems to get in the way of the forward/backward motion
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, 90)
    turnOffServos()
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    DEFAULT()
})
function FOR1 () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo10, maxVal)
    basic.pause(200)
}
function ROT2 () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, maxVal)
    basic.pause(200)
}
function DOWN2 () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo14, 90)
    basic.pause(200)
}
let minVal = 0
let maxVal = 0
basic.showIcon(IconNames.Happy)
maxVal = 180
minVal = 0
basic.pause(1000)
DEFAULT()
