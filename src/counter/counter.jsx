import React, { useState, useEffect } from 'react';

function Counter(){
    const [text, setText] = useState(0)
    const [counterVisibility, setCounterVisibility] = useState(true)


    useEffect(()=>{
        console.log('updated')
    })


   const increase = ()=>{
        setText(text+1)
    }

    const decrease = ()=>{
        setText(text-1)
    }

    const visibilityHandler = ()=>{
        setCounterVisibility(!counterVisibility)
    }

    return <div>
        <button onClick={visibilityHandler}>Handle Visibility</button>
        {
          counterVisibility &&
          <div className={"counter-container"}>
            <button onClick={increase}>+</button>
            <span>{text}</span>
            <button onClick={decrease}>---</button>
        </div>
        }
    </div>
}

export default Counter
