import React, { forwardRef, useState } from 'react';
import './style.css';

const ResetSelect = props => {
  const ref = React.useRef();
  const { onChange, defaultLabel = 'Actions', ...otherProps } = props;
  const selectOption = e => {
    let childDom = ref.current;
    const node = childDom;
    const resetValue = () => {
      let options = node.options;
      for (var i = 0; i < options.length; i++) {
        options[i].selected = options[i].defaultSelected;
      }
    };
    setTimeout(resetValue, 10);
    onChange(e);
  };

  return (
    <>
      <select onChange={selectOption} ref={ref} {...otherProps}>
        <option>{defaultLabel}</option>
        {props.children}
      </select>
    </>
  );
};

export default function App() {
  const handleValue = e => {
    console.log('value', e.target.value);
  };

  return (
    <div className='_k_custom_select_one' >
      <ResetSelect onChange={e => handleValue(e)}>
        <option value="view">view</option>
        <option value="delete">delete</option>
        <option value="edit">edit</option>
      </ResetSelect>
    </div>
  );
}
