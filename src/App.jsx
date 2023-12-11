import React, { useState } from 'react';
import PropsJsx from './homeWork/PropsJsx';
import EventComp from './homeWork/Eents Component';
import Button from './homeWork/Button';
import Portal from './homeWork/PortalChildrend';

function App() {
  const [value,setValue] = useState('')

  return (
    <div>
      <EventComp/>
      {/* <Button onClick={sendbutton}>Send</Button>
      <Button onClick={clickbutton}>Click</Button>
      <input onChange={event => fn(event)}/> */}
      <PropsJsx></PropsJsx>
      <Portal
        container={document.head}
      ><p>HElLO</p></Portal>
    </div>
  );
}

export default App;
