import "./modal.css"

import React from 'react'

const Modal = ({showModal, setShowModal}) => {

    const closeModal = () =>{
        setShowModal(!showModal);
    }
  return (
    <div className={showModal ? "modalWrapper" : "hide"}>
      <span className="contactUs">Contact Us</span>
      <span>About Us</span>
      <span>FAQ</span>
      <span>Prices</span>
      <button className="modalbutton" onClick={closeModal}>close</button>
    </div>
  )
}

export default Modal
