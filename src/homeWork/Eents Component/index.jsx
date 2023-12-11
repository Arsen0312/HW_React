import React, { useRef, useState } from 'react';

const EventComp = () => {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);
  const userCom = useRef();
  const [comments, setComments] = useState([]);

  const plus = () => setCount((prev) => prev + 1);
  const minus = () => setCount((prev) => prev - 1);

  const logValue = ({ target }) => setValue(target.value);
  const logEvent = (eventName) => console.log(eventName);

  const AddComment = () => {
    const userComment = userCom.current.value.trim();

    if (userComment) {
      const newComment = {
        id: comments.length + 1,
        text: userComment,
      };
      setComments((prevComments) => [...prevComments, newComment]);
      userCom.current.value = '';
      userCom.current.focus();
    }
  };

  return (
    <div>
      <div
        style={{
          width: '300px',
          height: '300px',
          backgroundColor: '#202020',
          borderRight: '5px solid white',
          borderBottom: '5px solid white',
          borderTop: '5px solid white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: '50px', fontSize: '24px' }}>{count}</div>
        <button onClick={plus} style={{ width: '30px', height: '30px' }}>
          +
        </button>
        <button onClick={minus} style={{ width: '30px', height: '30px' }}>
          -
        </button>
      </div>
      <div
        style={{
          backgroundColor: 'pink',
          position: 'absolute',
          top: '0',
          right: '150px',
          borderBottom: '5px solid white',
          borderLeft: '5px solid white',
          borderRight: '5px solid white',
          textAlign: 'center',
          padding: '10px',
        }}
      >
        <Title />
        <Paragraph />
      </div>
      <div
        style={{
          backgroundColor: 'green',
          width: '400px',
          height: '500px',
          position: 'absolute',
          top: '250px',
          right: '50px',
          border: '5px solid white',
        }}
      >
        <input type="text" ref={userCom} />
        <button onClick={AddComment}>Add</button>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      </div>
      <div
        style={{
          width: '600px',
          height: '300px',
          backgroundColor: 'rgb(34, 47, 100)',
          borderTop: '5px solid white',
          borderRight: '5px solid white',
          borderBottom: '5px solid white',
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <input
          style={{
            borderRadius: '4px',
            boxShadow: '1px 1px 10px 0px pink',
            border: 'purple',
            width: '200px',
            height: '30px',
            outlineColor: 'rgb(248, 115, 137)',
            textAlign: 'center',
            position: 'absolute',
            top: '10px',
          }}
          onChange={(event) => logValue(event)}
          onBlur={() => logEvent('onBlur')}
          onDoubleClick={() => logEvent('onDoubleClick')}
          onFocus={() => logEvent('onFocus')}
          onClick={() => logEvent('onClick')}
          onMouseOver={() => logEvent('onMouseOver')}
          onKeyDown={() => logEvent('onKeyDown')}
          onContextMenu={(event) => {
            event.preventDefault();
            logEvent('onContextMenu');
          }}
          onWheel={() => logEvent('onWheel')}
          onSubmit={(event) => {
            event.preventDefault();
            logEvent('onSubmit');
          }}
        />
        <span style={{ backgroundColor: 'white', color: 'black', border: '1px solid pink', padding: '10px' }}>
          {value}
        </span>
      </div>
    </div>
  );
};

const Title = () => <h1>Portal - Порталы в React</h1>;

const Paragraph = () => (
  <p>
    Используйте порталы для рендеринга компонентов за пределами их родительского
    <br /> контейнера. Создайте компонент, который рендерит содержимое в портале, например, в
    <br /> другой части документа. Объясните, в каких сценариях это может быть
    <br /> полезным.
  </p>
);

export default EventComp;
