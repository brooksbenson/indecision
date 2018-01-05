import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <ul>
      {
        props.options.map((option, i) => {
          return (
            <Option 
              key={option}
              text={option}
              idx={i}
              removeSelf={props.handleRemoveOne}
            />
          );
        })
      }
    </ul>
  );
};

export default Options;