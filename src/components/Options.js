import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <section className='options'>

      <header className='options__header'>
        <h3 className='options__title'>
          Your Options
        </h3>
        <button
          className='button button--link'
          onClick={props.handleRemoveAll}> 
          Remove All
        </button>
      </header>

      {props.options.length == 0 && <p className='options__msg'>Add an option to get started!</p>}

      <ul className='options__list'>
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

    </section>
  );
};

export default Options;