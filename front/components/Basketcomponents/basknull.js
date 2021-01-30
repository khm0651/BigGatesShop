import React from "react";
import {Button} from "antd";
import Link from "next/link";


const Basknull =()=>{
    return (
        <>
        <div style ={{paddingLeft: "300px", paddingBottom: "30px"}}> 장바구니가 비었습니다.</div>
        <Button style ={{marginLeft:"300px"}}><Link href='/index'><a>쇼핑 계속하기</a></Link></Button>
        </>
    )
}

export default Basknull;