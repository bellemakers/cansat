let Trykk = 0
let n = 0
let midling = 100
pxtlora.e32Init(
DigitalPin.P8,
DigitalPin.P9,
DigitalPin.P16,
SerialPin.P14,
SerialPin.P15,
BaudRate.BaudRate9600,
false
)
basic.forever(function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    n += 1
    for (let index = 0; index < midling; index++) {
        Trykk = Trykk + BME280.pressure(BME280_P.hPa)
    }
    Trykk = Trykk / midling
    Trykk = Math.round(Trykk * 10) / 10
    pxtlora.e32SendStringFixed("ErMa," + n + "," + Trykk + "," + BME280.temperature(BME280_T.T_C), 13, 24)
    basic.clearScreen()
    basic.pause(500)
})
