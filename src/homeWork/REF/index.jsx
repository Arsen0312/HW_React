import React, { useRef, useState, createContext } from 'react';
import Header from './Header';
import Button from './Button';

export const contextTema = createContext()

const Ref = () => {
    const valueInput = useRef(null);
    const [value, setValue] = useState('')

    const fnSetValue = () => {setValue(valueInput.current.value)}

    const clear = () => {
        if (valueInput.current) {
            valueInput.current.value = ""
            setValue("")
            valueInput.current.focus()
        }}

    const [temaBackground, setTemaBackground] = useState("#d1d1d1")
    const [temaFonth, setTemaFonth] = useState("#202020")
    const temaBackFn = () => {setTemaBackground( prev => prev == "#d1d1d1" ? "#202020" : "#d1d1d1" )}
    const TemaFonth = () => {setTemaFonth( prev => prev == "#d1d1d1" ? "#202020" : "#d1d1d1" )}

    return (
        <div>
            <contextTema.Provider value={{ temaBackground, temaFonth, temaBackFn, TemaFonth }}>
                <Header />
                <Button />
            </contextTema.Provider>
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
            <span>
                {value}
            </span>
        </div>
    )
}

export default Ref
