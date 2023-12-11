import React, { useState } from 'react';
import PropsJsx from './homeWork/PropsJsx';
import EventComp from './homeWork/Eents Component';
import Button from './homeWork/Button';

function App() {
  const [value,setValue] = useState('')

  return (
    <div>
      <EventComp/>
      {/* <Button onClick={sendbutton}>Send</Button>
      <Button onClick={clickbutton}>Click</Button>
      <input onChange={event => fn(event)}/> */}
      {/* <PropsJsx></PropsJsx> */}
    </div>
  );
}

export default App;
