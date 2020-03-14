import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    ariaHideApp={false} //WORK AROUND FOR NOW *******
    isOpen={!!props.selectedOption}
    contentLabel={"Selected option"}
    onRequestClose={props.handleDeleteModal}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title" >Selected Option</h3>
    {props.selectedOption && <p className="modal__body" >{props.selectedOption}</p>}
    <button className="button" onClick={props.handleDeleteModal}>close</button>
  </Modal>
);

export default OptionModal;
