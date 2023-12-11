import React, { useState } from 'react'

const EventComp = () => {
  const [value, setValue] = useState("")

  function logValue({ target }) { setValue(target.value) }

  function logEvent(eventName) {console.log(eventName)}

  return (
    <div>
      <ComponentPlusMinus/>
      <div style={{ width: "600px", height: "300px", backgroundColor: "rgb(34, 47, 100)", borderTop: "5px solid white", borderRight: "5px solid white", borderBottom: "5px solid white", marginTop: "10px", display: 'flex', justifyContent: "center", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <input
          style={{ borderRadius: "4px", boxShadow: "1px 1px 10px 0px pink", border: "purple", width: "200px", height: "30px", outlineColor: "rgb(248, 115, 137)", textAlign: "center", position: "absolute", top: "10px" }}
          onChange={(event => logValue(event))}
          onBlur={() => logEvent("onBlur")}
          onDoubleClick={() => logEvent("onDoubleClick")}
          onFocus={() => logEvent("onFocus")}
          onClick={() => logEvent("onClick")}
          onMouseOver={() => logEvent("onMouseOver")}
          onKeyDown={() => logEvent("onKeyDown")}
          onContextMenu={(event) => { event.preventDefault(); logEvent("onContextMenu"); }}
          onWheel={() => logEvent("onWheel")}
          onSubmit={(event) => { event.preventDefault(); logEvent("onSubmit"); }}
        />
        <span style={{ backgroundColor: "white", color: "black", border: "1px solid pink", padding: "10px" }}>{value}</span>
      </div>
    </div>
  )
}

// Разделите ваше приложение на несколько компонентов, представляющих различные части интерфейса. Организуйте компоненты в древовидную структуру.

const ComponentPlusMinus = () => {

    const [count, setCount] = useState(0);
    function plus() { setCount(prev => prev + 1) }
    function minus() { setCount(prev => prev - 1) }

    return (
        <div style={{ width: "300px", height: "300px", backgroundColor: "#202020", borderRight: "5px solid white", borderBottom: "5px solid white",borderTop: "5px solid white", display: 'flex', justifyContent: "center", alignItems: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: "50px", fontSize: "24px" }}>{count}</div>
        <button onClick={plus} style={{ width: "30px", height: "30px" }}>+</button>
        <button onClick={minus} style={{ width: "30px", height: "30px" }}>-</button>
      </div>
    )
}

export default EventComp;
