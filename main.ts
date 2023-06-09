function UP1 () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, minVal)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo13, maxVal)
    basic.pause(1000)
}
input.onButtonPressed(Button.A, function () {
    UP1()
    FOR1()
    DOWN1()
})
function DOWN1 () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo13, 90)
    basic.pause(1000)
}
function ROT1 () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, 90)
    basic.pause(1000)
}
function FOR2 () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo10, 0)
    basic.pause(1000)
}
// * Servo Assignments
// 
// * 1 -> FR
// 
// * 2 -> FL
// 
// * 3 -> BR
// 
// * 4 -> BL
// 
// *
// 
// * pos 0 = down/straight leg
// 
// * pos 1 = lift up
// 
// *
// 
// * 5 -> Middle Forward
// 
// * 6 -> Middle Rotation
input.onButtonPressed(Button.AB, function () {
    UP1()
    FOR1()
    DOWN1()
    UP2()
    FOR2()
    DOWN2()
})
function UP2 () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, minVal)
    basic.pause(200)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo14, maxVal)
    basic.pause(200)
}
input.onButtonPressed(Button.B, function () {
    UP2()
    FOR2()
    DOWN2()
})
function DEFAULT () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo13, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo14, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo10, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, maxVal)
}
function FOR1 () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo10, maxVal)
    basic.pause(1000)
}
function ROT2 () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, maxVal)
    basic.pause(1000)
}
function DOWN2 () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 90)
    basic.pause(200)
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
