import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef
} from 'react';

const ScrollToComponent = ({ children }, ref) => {
  const wrapper = useRef();
  const origin = useRef();

  useEffect(() => {
    const element = wrapper.current;

    if (element.childElementCount) {
      const childNodes = [...element.childNodes];

      origin.current = childNodes[0];

      const parent = element.parentNode;

      for (let node of childNodes) {
        parent.insertBefore(node, element);
      }

      parent.removeChild(element);
    } else {
      origin.current = element;
    }
  });

  useImperativeHandle(ref, () => ({
    scrollIntoView: param => {
      origin.current.scrollIntoView(param);
    }
  }));

  return <div ref={wrapper}>{children}</div>;
};

export default forwardRef(ScrollToComponent);
