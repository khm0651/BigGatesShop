import React from "react";
import {Card, Avatar, Row, Col, Menu, Affix, Button} from "antd";
import Head from "next/head";



export const dummyUser ={
    nickname : '박보영',
    Post: [],
    money : '10억',
    point : '999,999',
    coupone : '2',

}


const Mypage=()=>{
    const orderfind =()=>{

    }

    return(
        <>
            <Head>
                <title>NodeBird</title>
                <link rel ="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <div style={{paddingLeft: "350px", paddingTop : "100px"}}>
                <div style={{fontSize : "20px", marginBottom : "20px", marginLeft: "40px"}}> 마이페이지 </div>
                <div style={{display: "flex",flexDirection:"row"}}>
                    <Col>
                        <Card style={{height:'150px', width :"fitContent", border : "none"}}>

                            <Card.Meta style={{height:'30px'}}
                                       avatar = {<Avatar style={avatarstyle}>{dummyUser.nickname[0]}</Avatar>}
                            />

                        </Card>
                    </Col>
                    <Col>
                        <Row style={{marginBottom: "10px"}}>안녕하세요. {dummyUser.nickname} 회원님</Row>
                        <Row style={{marginBottom : "20px"}}>
                            <Button style={{marginRight:"10px"}}> 주문 내역 조회</Button>
                            <Button style={{marginRight:"10px"}}> 장바구니</Button>
                            <Button style={{marginRight:"10px"}}> 배송조회</Button>
                            <Button style={{marginRight:"10px"}}> My Board</Button>
                        </Row>

                        <Row style={dddd}>
                            <Col style={aaaaa}>
                                <div>예치금</div>
                                <div>{dummyUser.money}원</div>
                            </Col>
                            <Col style={aaaaa} >가용 포인트 <br/><b>P</b>{dummyUser.point} </Col>
                            <Col style={aaaaa}>쿠폰 <br/>{dummyUser.coupone}개</Col>
                        </Row>

                    </Col>

                </div>
                <div></div>
            </div>
        </>

    );
};
const aaaaa = {
    width: "140px",
    borderRight: "1px solid gray",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}
const avatarstyle = {
    width: "150px",
    height: "150px",
    fontSize: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
const dddd ={
    border: "1px solid gray",
    borderRadius: "20px 20px 20px 20px",
    display: "flex",
    height: "91px",
    width: "420px"
}
export default Mypage;
