import classes from './Modal.module.css';

function Modal({children, onClose}) {
    return (
        <>
        {/* in simple words backdrop thing is the background which is behind the new post */}
        {/* onClose is the just the prop name that i used in postlist file and onClick is the name of the prop that i used in this file */}
        <div className= {classes.backdrop} onClick={onClose}></div> 
        <dialog open className={classes.modal}>{children}</dialog>
        </>
    )
}

export default Modal; 