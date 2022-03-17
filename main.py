def on_button_pressed_a():
    basic.show_leds("""
        . # . # .
                . . . . .
                # . . . #
                . # # # .
                . . . . .
    """)
    soundExpression.happy.play()
    basic.pause(1000)
    basic.show_leds("""
        . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
    """)
    basic.pause(1000)
    basic.show_leds("""
        . # . # .
                . . . . .
                # . . . #
                . # # # .
                . . . . .
    """)
    soundExpression.giggle.play()
    basic.pause(1000)
    basic.show_leds("""
        . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
    """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_free_fall():
    basic.show_leds("""
        . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
    """)
    basic.pause(2000)
    basic.show_leds("""
        # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
    """)
    basic.pause(1000)
    basic.show_leds("""
        . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
    """)
    soundExpression.sad.play()
input.on_gesture(Gesture.FREE_FALL, on_gesture_free_fall)

def on_button_pressed_b():
    soundExpression.yawn.play()
    basic.show_leds("""
        . . . . .
                # # . # #
                . . . . .
                . # . # .
                . # # # .
    """)
    basic.pause(1000)
    basic.show_icon(IconNames.HEART)
    basic.pause(1000)
    basic.show_leds("""
        . . . . .
                # # . # #
                . . . . .
                . # . # .
                . # # # .
    """)
input.on_button_pressed(Button.B, on_button_pressed_b)
