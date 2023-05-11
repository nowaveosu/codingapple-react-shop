/* eslint-disable */ 
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const YellowBtn = styled.button`
    background : ${props => props.bg};
    color : ${props => props.bg === "blue" ? "white" : "black"};
    padding : 10px;
`

function Detail (props) {

    useEffect(() => {

        let a = setTimeout(()=>{setalert(false)},2000)
        console.log(2);
        return() => {
            console.log(1)
            clearTimeout(a)
        }
    },[])
    
    let [count, setCount] = useState(0)
    let [alert, setalert] = useState(true)

    let {id} = useParams();
    let 찾은상품 = props.shoes.find(x => x.id == id);

    console.log(id);
    return (
        <div className="container">
            {
                alert === true
                ? (
                    <div className="alert alert-warning">2초이내 구매시 할인</div>
                )
                : null
            }

            <div className="row">
                <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{props.shoes[id].title}</h4>
                <p>{props.shoes[id].content}</p>
                <p>{props.shoes[id].price}원</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;