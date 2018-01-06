import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  return (
    <Modal
      contentLabel="Selected Option"
      isOpen={!!props.selectedOption}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
    <h3>Selected Option</h3>
    <p>{props.selectedOption}</p>
    <button onClick={props.handleClearSelectedOption}>Ok</button>
    </Modal>
  )
}

export default OptionModal;