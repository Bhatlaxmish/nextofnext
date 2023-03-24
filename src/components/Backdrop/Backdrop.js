import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {

 const   backdropclasses=['Backdrop',props.show?'BackdropOpen':'BackdropClosed'];
    <div className={backdropclasses.join('')}></div>
};

export default backdrop;