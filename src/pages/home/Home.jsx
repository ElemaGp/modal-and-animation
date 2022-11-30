import "./home.css"
import React, { useState } from 'react'
import Modal from "../../components/modal/Modal"

const Home = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () =>{
        setShowModal(!showModal);
    }
    

  return (
    <div className={showModal ? "darkerHomeContainer" : "homeContainer"}>
     <Modal showModal={showModal} setShowModal={setShowModal}/>
     <div className={showModal ? "hide homeIcon" : "show homeIcon"} onClick={openModal}>ICON</div>
    </div>
  )
}

export default Home