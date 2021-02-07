import React from "react";
import {Card, Avatar, Row, Col, Menu, Affix, Button} from "antd";
import Head from "next/head";



export const dummyUser ={
    nickname : '박보영',
    Post: [],
    money : '999,999',
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
            <div style={{paddingLeft: "350px", paddingTop : "50px"}}>
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
                        <Row style={{marginBottom: "10px"}}><b>안녕하세요. {dummyUser.nickname} 회원님</b></Row>
                        <Row style={{marginBottom : "20px"}}>
                            <Button style={{marginRight:"10px"}}> 주문 내역 조회</Button>
                            <Button style={{marginRight:"10px"}}> 장바구니</Button>
                            <Button style={{marginRight:"10px"}}> 배송조회</Button>
                            <Button style={{marginRight:"10px"}}> My Board</Button>
                        </Row>

                        <Row style={dddd}>
                            <Col style={aaaaa}><div><b>예치금</b></div><div><b>￦ {dummyUser.money}</b></div></Col>
                            <Col style={aaaaa}><div><b>가용 포인트</b></div><div><b>P {dummyUser.point}</b></div></Col>
                            <Col style={cccc}><div><b>쿠폰 <Button style={{backgroundColor :"rebeccapurple", color:"white"}}>조회</Button></b></div><div><b>{dummyUser.coupone} 개</b></div>
                            </Col>
                            {/*//<Col style={aaaaa}><div><b>가용 포인트</b></div><br/><b>P {dummyUser.point}</b></Col>*/}
                            {/*<Col style={cccc}><div><b>쿠폰</b></div><br/><b>{dummyUser.coupone} 개</b></Col>*/}
                        </Row>
                    </Col>
                </div>
                <div>
                    <div style={{display: "flex",flexDirection:"row", fontSize : "15px", marginBottom : "5px", marginLeft: "40px", marginTop : "30px"}}>
                        <Col style={{marginRight : "10px"}}>ORDER STATUS </Col>
                        <Col style={{color :"lightgray"}}> 최근 3개월 </Col>
                        </div>
                    <div style ={{marginLeft: "40px"}}>
                        <Row style={dddd1}>
                            <Col style={aaaaa1}><div>입금 전</div><div>N</div></Col>
                            <Col style={aaaaa1} >배송 준비 중 <br/>N</Col>
                            <Col style={aaaaa1} >배송 중<br/>N</Col>
                            <Col style={aaaaa1} >배송 완료<br/>N</Col>
                            <Col style={aaaaa1} >취소<br/>N</Col>
                            <Col style={aaaaa1} >교환<br/>N</Col>
                            <Col style={cccc1}> 반품<br/>N</Col>
                        </Row>
                    </div>
                </div>

            </div>
        </>

    );
};
const aaaaa = {

    width: "180px",
    borderRight: "1px solid gray",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};
const cccc = {
    width: "130px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};
const dddd ={
    border: "1px solid gray",
    borderRadius: "20px 20px 20px 20px",
    display: "flex",
    height: "91px",
    width: "420px"
};
const aaaaa1 = {
    width: "2500px",
    borderRight: "1px solid gray",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};
const cccc1 = {
    width: "2500px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};
const dddd1 ={
    border: "1px solid gray",
    borderRadius: "20px 20px 20px 20px",
    display: "flex",
    height: "91px",
    width: "595px"
}
const avatarstyle = {
    width: "150px",
    height: "150px",
    fontSize: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
export default Mypage;
