import React, {useState, useContext} from 'react'
import {ThemeContext} from './App'

export default function CounterHooks ({initialCount}) {
    const [count, SetCount] = useState(initialCount)
    const style = useContext(ThemeContext)
    return (
        <div>
            <button style={style} onClick = {() =>SetCount(prevCount => prevCount -1)}>-</button>
            <span>{count}</span>
            <button style= {style} onClick = {() =>SetCount(prevCount => prevCount +1)}>+</button>
            </div>
    )
}