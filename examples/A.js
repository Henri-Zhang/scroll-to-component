import React from 'react';

export default ({ text }) => {
  const style = {
    height: 400,
    width: '100%',
    fontSize: '24px',
    textAlign: 'center',
    background: 'antiquewhite'
  };

  return <h1 style={style}>{text}</h1>;
};
