import React from 'react';

import './Modal.css';

const modal = (props) =>
{
    const modalclasses=['modal',props.show==='entering'?'modalOpen': props.show==='exiting'?'modalClosed':null];
    
    
    return  (
    <div className="Modal">
        <h1>A Modal</h1>
        <button  className={modalclasses.join('')} onClick={props.closed}>Dismiss</button>
    </div>
)
};

export default modal;