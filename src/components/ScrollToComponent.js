import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const ScrollToComponent = ({ mode = 'wrap', children }, ref) => {
  const wrapper = useRef();

  useImperativeHandle(ref, () => ({
    scrollIntoView: param => {
      wrapper.current.scrollIntoView(param);
    }
  }));

  return <div ref={wrapper}>{children}</div>;
};

export default forwardRef(ScrollToComponent);
