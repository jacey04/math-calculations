input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onButtonPressed(Button.AB, function () {
    new_number = num
    basic.showNumber(new_number)
})
input.onButtonPressed(Button.B, function () {
    num += -1
    basic.showNumber(num)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(A - B)
    basic.showNumber(C)
    basic.showNumber(D)
    basic.showNumber(E)
    basic.showNumber(F)
    basic.showNumber(G)
    basic.showNumber(H)
    basic.showNumber(I)
    basic.showNumber(J)
})
let new_number = 0
let J = 0
let I = 0
let H = 0
let G = 0
let F = 0
let E = 0
let D = 0
let C = 0
let B = 0
let A = 0
let num = 0
basic.showIcon(IconNames.Target)
num = 1
basic.showNumber(num)
A = num + 9
B = num - 9
C = num * 2
D = num / 3
E = num % 4
F = Math.sqrt(num)
G = Math.round(3 / 4)
H = Math.ceil(3 / 9)
I = num ** 3
J = randint(0, 100)
