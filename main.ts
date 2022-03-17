input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    행복 += 1
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(2000)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    슬픔 += 1
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Game over")
    basic.showIcon(IconNames.Skull)
    basic.pause(5000)
    죽음 += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # . # .
        . # # # .
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # . # .
        . # # # .
        `)
    잠듦 += 1
    basic.pause(1000)
    basic.clearScreen()
})
let 잠듦 = 0
let 죽음 = 0
let 슬픔 = 0
let 행복 = 0
basic.pause(1000)
basic.showLeds(`
    . . # . .
    . # . . .
    # . . # .
    . # . . #
    . . # # .
    `)
basic.pause(1000)
basic.showString("loading..")
basic.pause(1000)
basic.showNumber(3)
basic.pause(1000)
basic.showNumber(2)
basic.pause(1000)
basic.showNumber(1)
basic.pause(1000)
basic.showString("start!")
basic.forever(function () {
    if (죽음 == 1) {
        basic.clearScreen()
        control.reset()
    } else {
        if (슬픔 == 2) {
            basic.showString("Why....")
            슬픔 = 0
        } else {
            if (행복 == 10) {
                basic.pause(1000)
                basic.showIcon(IconNames.Heart)
                basic.pause(100)
                basic.showIcon(IconNames.SmallHeart)
                basic.pause(100)
                basic.showIcon(IconNames.Yes)
                basic.pause(100)
                basic.showIcon(IconNames.No)
                basic.pause(100)
                basic.showIcon(IconNames.Happy)
                basic.pause(100)
                basic.showIcon(IconNames.Sad)
                basic.pause(100)
                basic.showIcon(IconNames.Pitchfork)
                control.reset()
            } else {
                if (잠듦 == 5) {
                    basic.pause(1000)
                    basic.showString("zZ")
                    basic.pause(500)
                    basic.showString("sleep forever")
                    control.reset()
                } else {
                	
                }
            }
        }
    }
})
