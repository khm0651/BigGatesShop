import React from 'react'
import {Menu, img} from 'antd'
import car from "../../img/car.png"
import scrollinstar from "../../img/scrollinstar.png"
import shopingcar from "../../img/shopingcar.png"
import scrollman from "../../img/srcollman.png"
import Link from "next/link";


const ScrollBar =()=>{
    return (
            <div style={scrollstyle}>
                <div style = {scrollElement}><Link href='/Basket'><a><img src={car}/></a></Link></div> {/*링크 수정*/}
                <div style = {scrollElement}><Link href='/Basket'><a><img src={shopingcar}/></a></Link></div>
                <div style = {scrollElement}><Link href='/Mypage'><a><img src={scrollman}/></a></Link></div>
                <div style = {scrollElement}><Link href='https://www.instagram.com/'><a><img src={scrollinstar}/></a></Link></div>
            </div>
    );
};

const scrollstyle ={
    border : "1px solid lightgray",
    width:" fit-content",
    borderRadius: "15px 15px 15px 15px",
    position : "fixed",
    right: "10px",
    top: "45px",
}
const scrollElement = {
    margin:"13px",
}

export default ScrollBar;
