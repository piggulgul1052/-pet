input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    soundExpression.happy.play()
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
    soundExpression.giggle.play()
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
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
    soundExpression.sad.play()
})
input.onButtonPressed(Button.AB, function () {
    soundExpression.hello.playUntilDone()
    basic.showString("Hello! I'm cute")
    basic.pause(5000)
})
input.onButtonPressed(Button.B, function () {
    soundExpression.yawn.play()
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
})
