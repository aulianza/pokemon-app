import React from "react";
import styled from "@emotion/styled";

const Modal = (props) => {
    return (
        <StyledModal>
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-title">{props.title}</div>
                </div>
                <div className="modal-body">{props.children}</div>
                <div className="modal-footer"></div>
            </div>
        </StyledModal>
    );
};

export default Modal;

const StyledModal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transition: all 0.3s ease-in-out;

    .modal-content {
        width: 500px;
        border-radius: 8px;
        background-color: #fff;
        transition: all 0.3s ease-in-out;
    }

    .modal-header,
    .modal-footer {
        padding: 10px;
    }

    .modal-title {
        margin: 0;
        font-size: 1.2em;
        font-weight: 500;
        padding: 0.5rem;
    }

    .modal-body {
        padding: 10px;
    }
`;
