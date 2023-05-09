import React from "react";

function Cont(props) {
    let url = 'https://codingapple1.github.io/shop/shoes'
    return(
        <div className='col-md-4'>
        <img src={`${url}${props.id + 1}.jpg`} width="80%"/>
        <h4>{props.title}</h4>
        <p>{props.price}</p>
        </div>
    )
}

export default Cont;