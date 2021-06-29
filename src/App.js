import React, { forwardRef, useState } from 'react';
import './style.css';

const ResetSelect = forwardRef((props, ref) => {
  const { children, getChildrenDom } = props;
  const handleRes = () => {
    let childDom = getChildrenDom();
    const node = childDom.current;
    const resetValue = () => {
      let options = node.options;
      for (var i = 0; i < options.length; i++) {
        options[i].selected = options[i].defaultSelected;
      }
    };
    setTimeout(resetValue, 10);
  };

  return (
    <>
      <div ref={ref} onClick={handleRes}>
        {children}
      </div>
    </>
  );
});

const MySelect = props => {
  const ref = React.useRef();
  const { getValue } = props;
  const selectOption = e => getValue(e.target.value);
  const grabChildValue = e => e;

  return (
    <ResetSelect getChildrenDom={() => grabChildValue(ref)}>
      <div class="_k_custom_select_one">
        <select onChange={selectOption} ref={ref}>
          <option>actions</option>
          {props.children}
        </select>
      </div>
    </ResetSelect>
  );
};

export default function App() {
  const handleValue = value => {
    console.log('value', value);
  };

  return (
    <div>
      <MySelect getValue={handleValue}>
        <option value="view">view</option>
        <option value="delete">delete</option>
        <option value="edit">edit</option>
      </MySelect>
    </div>
  );
}
