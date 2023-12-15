import React, {useRef} from 'react';

const Todo = () => {
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <Input/>
        </div>
    )
}

const Input = () => {
    const inputRef = useRef()
    const log = () => {
        console.log(inputRef.current.value)
        inputRef.current.value = ""
        inputRef.current.focus()
    }
    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={log}>
                Add
            </button>
        </div>
    )
}


export default Todo;