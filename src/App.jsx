import React, { useState } from 'react'
import PropsJsx from './homeWork/PropsJsx'
import EventComp from './homeWork/Eents Component'
import Button from './homeWork/Button'
import Portal from './homeWork/PortalChildrend'
import Todo from './homeWork/TodoReact'
import Counter from './homeWork/USESTATE/index.jsx'
import Memo from './homeWork/MEMO/index.jsx'

function App() {

  return (
    <div>
      <Memo/>
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
