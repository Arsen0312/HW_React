import React, { useRef, useState } from 'react';

const Ref = () => {
    const valueInput = useRef(null);
    const [value, setValue] = useState('')

    const fnSetValue = () => {setValue(valueInput.current.value)}

    const clear = () => {
        if (valueInput.current) {
            valueInput.current.value = ""
            setValue("")
            valueInput.current.focus()
        }
    }

    const [temaBackground, setTemaBackground] = useState("#d1d1d1")

    const temaBackFn = () => {
        setTemaBackground( prev => prev == "#d1d1d1" ? "#202020" : "#d1d1d1" )
    }
    const [temaFonth, setTemaFonth] = useState("#202020")

    const TemaFonth = () => {
        setTemaFonth( prev => prev == "#d1d1d1" ? "#202020" : "#d1d1d1" )
    }

    return (
        <div>
            <header style={{backgroundColor:temaBackground, border:"2px solid grey", borderRadius:"8px", margin:" 10px 10px 10px 10px", display:"flex", alignItems:"center", justifyContent:"center", position:"relative"}}>
                <h1 style={{color:temaFonth}}>HELLO WORLD</h1>
                <button onClick={() => {temaBackFn(); TemaFonth();}} style={{position:"absolute", bottom:"-40px", borderRadius:"8px", padding:"5px"}}>Изменить Тему</button>
            </header>
            <form>
        <label>
          Введите текст:
          <input type="text" ref={valueInput} onChange={fnSetValue}/>
        </label>
        <br />
        <button type="button" onClick={clear}>
          Очистить
        </button>
      </form>
            <span>{value}</span>
        </div>
    );
};

export default Ref;
