import React from "react";
import "./Modal.css";

const Modal = ({active, setActive, children}: { active: any, setActive: any, children: any }) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}
export default Modal;