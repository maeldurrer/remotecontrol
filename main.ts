input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        # # . # #
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # . . #
        . # # # .
        . # . . #
        . # # # .
        `)
    music.playMelody("A C5 D E C5 G A B ", 180)
})
radio.setGroup(1)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
basic.showLeds(`
    . . . . .
    # # # . .
    # # # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    # # # # #
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        radio.sendString("vor")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        radio.sendString("zurück")
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        radio.sendString("links")
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        radio.sendString("rechts")
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        radio.sendString("halt")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
