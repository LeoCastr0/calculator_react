import { useState } from "react";
import './Calculator.css';
import {Button} from "../components/Button";
import {Display} from "../components/Display";

export const Calculator = (props) => {
    const initialState = {
        displayValue : '0',
        clearDisplay: false,
        operation: null,
        values: [0, 0],
        current: 0
    }
    const [display, setDisplay] = useState(initialState)

    const clearMemory = () => {
        setDisplay(initialState)
    }
    const setOperation = (operation) => {
       if(display.current === 0) {
           setDisplay({...display, operation, current: 1, clearDisplay: true})
       } else {
           const equals = operation === '='
           const currentOperation = display.operation

           const values = [...display.values]
           switch (currentOperation){
               case '+':
                   values[0] = values[0] + values[1]
                   break;
               case '-':
                   values[0] = values[0] - values[1]
                   break;
               case '*':
                   values[0] = values[0] * values[1]
                   break;
               case '/':
                   values[0] = values[0] / values[1]
                   break;
               default:
                   values[0] = display.values[0]
           }
           values[1] = 0

           setDisplay({
               ...display,
               displayValue: String(values[0]),
               operation: equals ? null : operation,
               current: equals ? 0 : 1,
               clearDisplay: !equals,
               values
           })
       }
    }
    const addDigit = (op) => {
        console.log(display.displayValue)
       if(op === '.' && display.displayValue.includes('.')){
           return
       }
       const clearDisplay = display.displayValue === '0' || display.clearDisplay

       const currentValue = clearDisplay ? '' : display.displayValue
       const displayValue = currentValue + op
       const newDisplayValue = {...display, displayValue, clearDisplay: false}
       setDisplay(newDisplayValue)


       if(op !== '.') {
           const i = display.current
           const newValue = parseFloat(displayValue)
           const values = [...display.values]
           values[i] = newValue
           setDisplay({...newDisplayValue, values})
       }
    }
    return (
        <div className="calculator">
            <Display value={display.displayValue} />
            <Button label="AC" click={() => clearMemory()} triple/>
            <Button label="/" click={e => setOperation(e)} operation/>
            <Button label="7" click={e=> addDigit(e)}/>
            <Button label="8" click={e=> addDigit(e)}/>
            <Button label="9" click={e=> addDigit(e)}/>
            <Button label="*" click={e => setOperation(e)} operation/>
            <Button label="4" click={e=> addDigit(e)}/>
            <Button label="5" click={e=> addDigit(e)}/>
            <Button label="6" click={e=> addDigit(e)}/>
            <Button label="-" click={e => setOperation(e)} operation/>
            <Button label="1" click={e=> addDigit(e)}/>
            <Button label="2" click={e=> addDigit(e)}/>
            <Button label="3" click={e=> addDigit(e)}/>
            <Button label="+" click={e => setOperation(e)} operation/>
            <Button label="0" click={e=> addDigit(e)} double/>
            <Button label="." click={e => addDigit(e)}/>
            <Button label="=" click={e => setOperation(e)} operation/>

        </div>
    )
}