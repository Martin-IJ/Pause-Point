import React from "react";
import Check from "../assets/modal-check.png";
import CloseBtn from '../assets/closeBtn.svg'

const Modal = ({closeModal}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <img src={CloseBtn} alt="" className="closeBtn" onClick={closeModal} />
        <div className="max-w-[282px] flex flex-col items-center text-center justify-center">
          <img src={Check} alt="" />
          <p className="text-[24px] mt-3">Successful</p>
          <p>Thank you! You will get a response soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
