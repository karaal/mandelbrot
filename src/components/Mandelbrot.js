import React, { useEffect } from 'react'

class C {
    constructor(re, im) {
        this.re = re
        this.im = im
    }

    /**
     * @mutable
     */
    power2_mut() {
        const re = this.re
        const im = this.im
        this.re = (re*re) - (im*im)
        this.im = 2 * re * im
    }

    /**
     * @mutable
     */
    add_mut(c) {
        this.re += c.re
        this.im += c.im
    }

    length() {
        return Math.sqrt(this.re*this.re + this.im * this.im)
    }
}

const Mandelbrot = ({steps, onClickNextStepButton, canvas}) => {

    const width = 540
    const height = 460

    const mandelbrotNumber = (c) => {

        let z = new C(0, 0)
        var i
        for (i = 0; i < steps; i++) {
            z.power2_mut()
            z.add_mut(c)
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
        c = new C(0, 0)
        for (re = -2.0; re < 0.7; re += 0.005) {
            for (im = -1.18; im < 1.18; im += 0.005) {
                c.re = re
                c.im = im
                context.clearRect(re*200 + 400, im*200 + 230, 1, 1)
                let num = mandelbrotNumber(c)
                if (num === false) {
                    context.fillStyle = 'black'
                } else {
                    switch (num) {
                        case 0:
                        case 1:
                        case 2:
                        default:
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
                        case 13:
                            context.fillStyle = 'yellow'
                            break
                    }
                }
                context.fillRect(re*200 + 400, im*200 + 230, 1, 1)
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