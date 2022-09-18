basic.forever(function () {
    if (input.temperature() < 15) {
        basic.setLedColor(0x0000ff)
        basic.showString("< 15")
    } else if (input.temperature() < 18) {
        basic.setLedColor(0xff9da5)
        basic.showString("< 18")
    } else if (input.temperature() < 20) {
        basic.setLedColor(0xffff00)
        basic.showString("< 20")
    } else if (input.temperature() < 22) {
        basic.setLedColor(0x7f00ff)
        basic.showString("< 22")
    } else if (input.temperature() < 24) {
        basic.setLedColor(0x00ff00)
        basic.showString("< 24")
    } else if (input.temperature() < 26) {
        basic.setLedColor(0x65471f)
        basic.showString("< 26")
    } else if (input.temperature() < 28) {
        basic.setLedColor(0x00ffff)
        basic.showString("< 28")
    } else if (input.temperature() < 17) {
        basic.setLedColor(0x000000)
        basic.showString("< 17")
    } else {
        basic.setLedColor(0xff0000)
        basic.showString("> 28")
    }
})
