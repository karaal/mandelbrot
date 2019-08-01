import React, {useRef, useEffect} from 'react'

class C {
    constructor(re, im) {
        this.re = re
        this.im = im
    }

    power2() {
        const pow = new C(0,0)
        pow.re = (this.re*this.re) - (this.im*this.im)
        pow.im = 2 * this.re * this.im
        return pow
    }

    add(c) {
        const sum = new C(0,0)
        sum.re = this.re + c.re
        sum.im = this.im + c.im
        return sum
    }

    length() {
        return Math.sqrt(this.re*this.re + this.im * this.im)
    }
}

const Mandelbrot = ({steps, onClickNextStepButton, canvas}) => {

    const width = 271
    const height = 237

    const mandelbrotNumber = (c) => {

        let z = new C(0, 0)
        var i
        for (i = 0; i < steps; i++) {
            z = z.power2()
            z = z.add(c)
            const len = z.length()
            if (len > 2) {
                return i
            } 
        }

        return false
    }

    useEffect(() => {
        const context = canvas.current.getContext("2d")
        let c, re, im
        for (re = -2.0; re < 0.7; re += 0.01) {
            for (im = -1.18; im < 1.18; im += 0.01) {
                context.clearRect(re*100 + 200, im*100 + 118, 1, 1)
                c = new C(re, im)
                let num = mandelbrotNumber(c)
                if (num === false) {
                    context.fillStyle = 'black'
                } else {
                    switch (num) {
                        case 0:
                        case 1:
                        case 2:
                            context.fillStyle = 'blue'
                            break
                        case 3:
                            context.fillStyle = '#27dda1'
                            break
                        case 4:
                            context.fillStyle = '#30e090'
                            break
                        case 5:
                            context.fillStyle = '#32e57d'
                            break
                        case 6:
                            context.fillStyle = '#51f238'
                            break
                        case 7:
                            context.fillStyle = '#7cff00'
                            break
                        case 8:
                            context.fillStyle = '#51ef39'
                            break
                        case 9:
                            context.fillStyle = '#32e57d'
                            break
                        case 10:
                            context.fillStyle = '#30e191'
                            break
                        case 11:
                            context.fillStyle = '#27dda1'
                            break
                        case 12:
                            context.fillStyle = '#24cdc1'
                            break
                    }
                }
                context.fillRect(re*100 + 200, im*100 + 118, 1, 1)
            }
        }
    })

    return (
        <div>
            <div><canvas ref={canvas} width={width} height={height}/></div>
            <button onClick={onClickNextStepButton}>Next</button>
            <div>Break after {`${steps}`} iterations.</div>
        </div>
    )
}

export default Mandelbrot