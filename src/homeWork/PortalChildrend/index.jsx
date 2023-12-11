import React from 'react';
import { createPortal } from 'react-dom';

const Portal = (props) => {
  const { container = document.body } = props;

  return createPortal(
    <div>{props.children}</div>,
    container
  );
};

export default Portal;