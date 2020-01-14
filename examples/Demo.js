import React, { useRef } from 'react';
import A from './A';
import B from './B';
import ScrollToComponent from './../src/components/ScrollToComponent';

const Demo = () => {
  const multi = useRef();
  const nil = useRef();
  const cls = useRef();
  const func = useRef();

  const scrollToMulti = () => {
    multi.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNil = () => {
    nil.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCls = () => {
    cls.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFunc = () => {
    func.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div style={{ position: 'fixed' }}>
        <button onClick={scrollToMulti}>Multi</button>
        <button onClick={scrollToNil}>Null</button>
        <button onClick={scrollToCls}>Cls</button>
        <button onClick={scrollToFunc}>Func</button>
      </div>
      <ScrollToComponent ref={multi}>
        <A text="Multi Child One" />
        <A text="Multi Child Two" />
      </ScrollToComponent>
      <ScrollToComponent ref={nil}></ScrollToComponent>
      <ScrollToComponent ref={cls}>
        <B text="Class Component" />
      </ScrollToComponent>
      <ScrollToComponent ref={func}>
        <A text="Function Component" />
      </ScrollToComponent>
    </div>
  );
};

export default Demo;
