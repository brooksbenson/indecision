import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionModal = (props) => {
  return (
    <Modal
      className="modal"
      contentLabel="Selected Option"
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleClearSelectedOption}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={200}>
      <h3 className="modal__title">Selected Option</h3>
      <p className="modal__body">{props.selectedOption}</p>
      <button className="button" onClick={props.handleClearSelectedOption}>Ok</button>
    </Modal>
  )
}

export default OptionModal;