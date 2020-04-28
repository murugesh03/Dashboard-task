import React from "react";

const Modal = ({ children, closeModal, modalState }) => {
  if (!modalState) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-content">
        <section className="modal-card-body">
          <div className="content">{children}</div>
        </section>

        <button
          className="modal-close is-large"
          onClick={closeModal}
          aria-label="close"
        ></button>
      </div>
    </div>
  );
};

export default Modal;
