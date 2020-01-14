import React, { useRef } from 'react';
import A from './A';
import ScrollToComponent from './../src/components/ScrollToComponent';

const Demo = () => {
  const one = useRef();

  const scrollToFourth = () => {
    one.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div style={{ position: 'fixed' }}>
        <button>First</button>
        <button>Second</button>
        <button>Third</button>
        <button onClick={scrollToFourth}>Fourth</button>
      </div>
      <A text="Component One" />
      <A text="Component Two" />
      <A text="Component Three" />
      <ScrollToComponent ref={one}>
        <A text="Component Four" />
      </ScrollToComponent>
    </div>
  );
};

export default Demo;
