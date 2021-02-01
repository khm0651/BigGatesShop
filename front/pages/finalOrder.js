import React from 'react';
import {Button, Checkbox, Col, Row} from "antd";

const cashDummy ={
    point: "999,999P",
    deposit: "999,999원",
    coupon:"N개",
};

const orderDummy ={
    image:"IMAGE1",
    productName:"상품명자리입니다",
    price:"12,500",
    sales:"1",
    willDeposit:"2",
    delivery:"기본배송",
    deliveryFee:"조건",
    total:"합계",

};

const style1 = {
    borderRight: "1px solid lightgray",
    paddingLeft: 10,

};



const Order = () => {
    return <>
        <div style={{marginLeft:300, width:"1200px"}}>
            <br/><br/>
            <div><h2>ORDER</h2></div>
            <br/>
            <div style={{border: "1px solid lightgray ", display: "flex", flexDirection: "row", width: "1200px"}}>
                <Col md={3} style={style1}>
                    <div><b>혜택정보</b></div>
                </Col>
                <Col md={7} style={style1}>
                    <div><b>가용포인트: </b>{cashDummy.point}</div>
                </Col>
                <Col md={7} style={style1}>
                    <div><b>예치금: </b>{cashDummy.deposit}</div>
                </Col>
                <Col md={7} style={{paddingLeft: 5}}>
                    <div><b>쿠폰: </b>{cashDummy.coupon}</div>
                </Col>
            </div>
            <br/>
            <div><h3>상품주문내역</h3></div>
            <br/>
            <Row style={{width:"1200px"}}>
            {/*상품내역 맨 위*/}
            <Row style={{borderTop:"2px solid gray", borderBottom:"2px solid lightgray", height:"30px", padding:5}}>
                <Col md={1} style={{paddingLeft:10}}>
                    <Checkbox name="checkAll"/>
                </Col>
                <Col md={11}></Col>
                <Col md={2} style={{paddingLeft: 10}}>
                    <div>판매가</div>
                </Col>
                <Col md={2} style={{paddingLeft: 10}}>
                    <div>수량</div>
                </Col>
                <Col md={2} style={{paddingLeft: 10}}>
                    <div>적립금</div>
                </Col>
                <Col md={2} style={{paddingLeft: 10}}>
                    <div>배송구분</div>
                </Col>
                <Col md={2} style={{paddingLeft: 10}}>
                    <div>배송비</div>
                </Col>
                <Col md={2} style={{paddingLeft: 10}}>
                    <div>합계</div>
                </Col>
            </Row>

                <Row style={{borderBottom: "1px solid lightgray", height:"50px", padding:15}}>
                    <Col md={1}>
                        <Checkbox name="check1"/>
                    </Col>
                    <Col md={3}>{orderDummy.image} </Col>
                    <Col md={8}>{orderDummy.productName}1</Col>
                    <Col md={2} style={{paddingLeft: 10}}>
                        <div>{orderDummy.price}</div>
                    </Col>
                    <Col md={2} style={{paddingLeft: 25}}>
                        <div>{orderDummy.sales}</div>
                    </Col>
                    <Col md={2} style={{paddingLeft: 25}}>
                        <div>{orderDummy.willDeposit}</div>
                    </Col>
                    <Col md={2} style={{paddingLeft: 15}}>
                        <div>{orderDummy.delivery}</div>
                    </Col>
                    <Col md={2} style={{paddingLeft: 20}}>
                        <div>{orderDummy.deliveryFee}</div>
                    </Col>
                    <Col md={2} style={{paddingLeft: 20}}>
                        <div>{orderDummy.total}</div>
                    </Col>
                </Row>
                <Row style={{borderBottom: "1px solid lightgray", height:"50px", padding:15}}>
                    <Col md={1}>
                        <Checkbox name="check2"/>
                    </Col>
                    <Col md={3}>{orderDummy.image} </Col>
                    <Col md={8}>{orderDummy.productName}2</Col>
                    <Col md={2} style={{paddingLeft: 10}}>
                        <div>{orderDummy.price}</div>
                    </Col>
                    <Col md={2} style={{paddingLeft: 25}}>
                        <div>{orderDummy.sales}</div>
                    </Col>
                    <Col md={2} style={{paddingLeft: 25}}>
                        <div>{orderDummy.willDeposit}</div>
                    </Col>
                    <Col md={2} style={{paddingLeft: 15}}>
                        <div>{orderDummy.delivery}</div>
                    </Col>
                    <Col md={2} style={{paddingLeft: 20}}>
                        <div>{orderDummy.deliveryFee}</div>
                    </Col>
                    <Col md={2} style={{paddingLeft: 20}}>
                        <div>{orderDummy.total}</div>
                    </Col>
                </Row>
                <Row style={{background:"lightgray", paddingTop:10, paddingBottom:10}}>
                    <Col md={6} style={{paddingLeft:15}}>
                        <Button>선택한 상품 삭제</Button>
                    </Col>
                    <Col md={10}> </Col>
                    <Col md={8} style={{padding:"5px 5px 5px 30px",fontSize:"16px"}}>
                        상품구매금액 20,500 + 배송비 4,000 = 24,500원
                    </Col>
                </Row>
            </Row>
            <div style={{color:"red", fontSize:"12px"}}>상품의 옵션 및 수량 변경은 상품상세 또는 장바구니에서 가능합니다.</div>
            <br/>
            <Row style={{borderTop:"1px solid black", borderBottom:"1px solid black", padding:5}}>
                <Row style={{borderBottom:"1px solid lightgray"}}>
                    <Col md={21}>
                        <div><h3>주문 정보</h3></div>
                    </Col>
                    <Col md={3}>
                        <div><h5>! 표시는 필수 입력칸 입니다.</h5></div>
                    </Col>
                </Row>
                <Row style={{borderBottom:"1px solid lightgray"}}>
                    <Col>
                        주문하시는분
                    </Col>
                </Row>
                <Row style={{borderBottom:"1px solid lightgray"}}>
                    <Col>
                        주소
                    </Col>
                </Row>
                <Row style={{borderBottom:"1px solid lightgray"}}>
                    <Col>
                        일반전화
                    </Col>
                </Row>
                <Row style={{borderBottom:"1px solid lightgray"}}>
                    <Col>
                        휴대전화
                    </Col>
                </Row>

                <Row>
                    <Col>
                        이메일
                    </Col>
                </Row>
            </Row>


            <Row>

            </Row>

        </div>

    </>
};

export default Order;