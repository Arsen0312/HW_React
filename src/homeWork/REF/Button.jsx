import React, { useContext } from 'react';
import { contextTema } from './';

const Header = () => {
  const { temaBackFn, TemaFonth  } = useContext(contextTema);


  return (
        <div>
            <button onClick={() => {temaBackFn(); TemaFonth(); console.log('llo');}} style={{ borderRadius:"8px", padding:"5px"}}>Изменить Тему</button>
        </div>
  )
}

export default Header
