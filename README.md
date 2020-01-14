## scroll-to-component

A React component to warp the aim component, and afford a `scrollIntoView` method to scroll aim component to visible area.

## Install

```
npm install scroll-to-component
or
yarn add scroll-to-component
```

---

## Usage

```jsx
import React, { useRef } from 'react';
import ScrollToComponent from 'scroll-to-component';

export default () => {
  const demo = useRef();

  const scroll = () => {
    const param = { behavior: 'smooth' };
    demo.current.scrollIntoView(param);
  };

  return (
    <ScrollToComponent ref={demo}>
      <YourComponent />
    </ScrollToComponent>
  );
};
```

The `param` is same as origin `scrollIntoView` in DOM element. Regard as [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView).
