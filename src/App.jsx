import React, { useState } from 'react'
import { Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import PropsJsx from './homeWork/PropsJsx'
import EventComp from './homeWork/Eents Component'
import Button from './homeWork/Button'
import Portal from './homeWork/PortalChildrend'
import Todo from './homeWork/TodoReact'
import Counter from './homeWork/USESTATE/index.jsx'
import Memo from './homeWork/MEMO/index.jsx'
import Ref from './homeWork/REF/index.jsx'
import About from './components/About.js'
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import NotFound from './components/404.js';

function App() {
  return (  
    <div>
       <BrowserRouter>
       <ul>
        <li><Link to={"/About"}>О нас</Link></li>
        <li><Link to={"/"}>Главная</Link></li>
        <li><Link to={"/Contact"}>Контакты</Link></li>
       </ul>
        <Routes>
          <Route path='/About' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      {/* <Ref/> */}
      {/* <Memo/> */}
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <EventComp/> */}
      {/* <Button onClick={sendbutton}>Send</Button>
      <Button onClick={clickbutton}>Click</Button>
      <input onChange={event => fn(event)}/> */}
      {/* <PropsJsx></PropsJsx> */}
      {/* <Portal container={document.head}> */}
        {/* <div> */}
          {/* <p>HElLO</p> */}
          {/* <p>Child Component 1</p> */}
          {/* <p>Child Component 2</p> */}
        {/* </div> */}
      {/* </Portal> */}
    </div>
  )
}

export default App;
