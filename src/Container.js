import React from "react";

function Cont(props) {
    return(
        <div className='col-md-4'>
        <img src={props.src} width="80%"/>
        <h4>{props.title}</h4>
        <p>{props.price}</p>
        </div>
    )
}

export default Cont;