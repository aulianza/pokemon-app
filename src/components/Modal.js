import React from "react";

import "./Modal.css";

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-title">{props.title}</div>
                </div>
                <div className="modal-body">{props.children}</div>
                <div className="modal-footer"></div>
            </div>
        </div>
    );
};

export default Modal;
