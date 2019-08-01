import React, {useState, useRef} from 'react'
import Mandelbrot from './components/Mandelbrot';

const App = () => {
    const [steps, setSteps] = useState(3)
    const canvas = useRef(null)

    const onClickNextStepButton = () => {
        if (steps === 12) {
            setSteps(3)
        } else {
            setSteps(steps + 1)
        }
    }

    return (
        <Mandelbrot
            steps={steps}
            onClickNextStepButton={onClickNextStepButton}
            canvas={canvas}
        />
    )
}

export default App