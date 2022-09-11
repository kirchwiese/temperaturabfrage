basic.forever(function () {
    if (input.temperature() < 15) {
        basic.setLedColor(0x0000ff)
    } else if (input.temperature() < 18) {
        basic.setLedColor(0xff9da5)
    } else if (input.temperature() < 20) {
        basic.setLedColor(0xffff00)
    } else if (input.temperature() < 22) {
        basic.setLedColor(0x7f00ff)
    } else if (input.temperature() < 24) {
        basic.setLedColor(0x00ff00)
    } else if (input.temperature() < 26) {
        basic.setLedColor(0x65471f)
    } else if (input.temperature() < 28) {
        basic.setLedColor(0x00ffff)
    } else {
        basic.setLedColor(0xff0000)
    }
})
