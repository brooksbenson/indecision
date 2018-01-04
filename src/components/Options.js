import React from 'react';
import Option from './Option';

const Options = (props) => (
  <ul>
    {
      props.options.map((option, i) => {
        return (
          <Option 
            key={option}
            text={option}
            index={i}
          />
        );
      })
    }
  </ul>
);

export default Options;