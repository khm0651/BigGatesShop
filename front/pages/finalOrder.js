import React from 'react';
import {Button, Checkbox, Col, Input, Row, Select} from "antd";

const {Option} = Select;

const cashDummy ={
    point: "999,999",
    deposit: "999,999",
    coupon:"N",
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

const styleOrderInfo ={
    background:"lightgray",
    height:"52px",
    padding:"14px 0 14px 10px"
};

const inputStyle = {
    padding:"10px 0px 10px 10px",
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
                    <div><b>가용포인트: </b>{cashDummy.point}P</div>
                </Col>
                <Col md={7} style={style1}>
                    <div><b>예치금: </b>{cashDummy.deposit}원</div>
                </Col>
                <Col md={7} style={{paddingLeft: 5}}>
                    <div><b>쿠폰: </b>{cashDummy.coupon}개</div>
                </Col>
            </div>
            <br/>
            <div><h3>상품주문내역</h3></div>
            <br/>
            <Row>
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
            <Row style={{borderBottom:"1px solid black"}}>
                <Row style={{borderBottom:"1px solid black"}}>
                    <Col md={21} >
                        <div><h3>주문 정보</h3></div>
                    </Col>
                    <Col md={3} style={{paddingTop:10}}>
                        <div style={{display:"inline-block"}}><h5><div style={{color:"red", display:"inline-block"}}>*</div>표시는 필수 입력칸 입니다.</h5></div>
                    </Col>
                </Row>
                <Row style={{borderBottom:"1px solid darkgray"}}>
                    <Col md={4} style={styleOrderInfo}>
                        <h5 style={{color:"red", display:"inline-block"}}>*</h5> 주문하시는분
                    </Col>
                    <Col md={8} style={inputStyle}>
                        <Input name="orderer" />
                    </Col>

                </Row>
                {/*주소 상단부분*/}
                <Row>
                    <Col md={4} style={styleOrderInfo}></Col>
                    <Col md={4} style={inputStyle}><Input name="postcode"/></Col>
                    <Col md={5} style={inputStyle}><Button name="btn_postcode">우편번호찾기</Button></Col>
                </Row>
                {/*주소 중단부분*/}
                <Row>
                    <Col md={4} style={styleOrderInfo}>
                        <h5 style={{color:"red", display:"inline-block"}}>*</h5> 주소
                    </Col>
                    <Col md={14} style={inputStyle}>
                        <Input name="address1"/>
                    </Col>
                    <Col style={{padding:"15px 0 14px 10px"}}><h5>기본주소</h5></Col>
                </Row>
                {/*주소 하단부분*/}
                <Row style={{borderBottom:"1px solid darkgray"}}>
                    <Col md={4} style={styleOrderInfo}></Col>
                    <Col md={14} style={inputStyle}><Input name="address2"/></Col>
                    <Col style={{padding:"15px 0 14px 10px"}}><h5>나머지주소</h5></Col>
                </Row>
                <Row style={{borderBottom:"1px solid darkgray", display:"flex"}}>
                    <Col md={4} style={styleOrderInfo}>
                        일반전화
                    </Col>
                    <Col md={3} style={inputStyle}>
                        <Select defaultValue="02" style={{ width: 140}} name="optionTel" >
                            <Option value="02">02</Option>
                            <Option value="031">031</Option>
                            <Option value="032">032</Option>
                            <Option value="041">041</Option>
                        </Select>
                    </Col>
                    <Col style={{width:"5px",padding:"10px 0 10px 5px"}}>-</Col>
                    <Col md={3} style={inputStyle}>
                        <Input name="middleTel"/>
                    </Col>
                    <Col style={{width:"5px",padding:"10px 0 10px 5px"}}>-</Col>
                    <Col md={3} style={inputStyle}>
                        <Input name="endTel"/>
                    </Col>
                </Row>
                <Row style={{borderBottom:"1px solid darkgray", display:"flex"}}>
                    <Col md={4} style={styleOrderInfo}>
                        <h5 style={{color:"red", display:"inline-block"}}>*</h5> 휴대전화
                    </Col>
                    <Col md={3} style={inputStyle}>
                        <Select defaultValue="010" style={{ width: 140}} name="optionPhone" >
                            <Option value="010">010</Option>
                            <Option value="011">011</Option>
                        </Select>
                    </Col>
                    <Col style={{width:"5px",padding:"10px 0 10px 5px"}}>-</Col>
                    <Col md={3} style={inputStyle}>
                        <Input name="middlePhone"/>
                    </Col>
                    <Col style={{width:"5px",padding:"10px 0 10px 5px"}}>-</Col>
                    <Col md={3} style={inputStyle}>
                        <Input name="endPhone"/>
                    </Col>
                </Row>

                <Row style={{ display:"flex"}}>
                    <Col md={4} style={styleOrderInfo}>
                        <h5 style={{color:"red", display:"inline-block"}}>*</h5> 이메일
                    </Col>
                    <Col md={6} style={inputStyle}>
                        <Input name="emailId"/>
                    </Col>
                    <Col style={{width:"5px", padding:"15px"}}> @ </Col>
                    <Col md={6} style={inputStyle}>
                        <Input name="emailAddress"/>
                    </Col>
                    <Col md={6} style={inputStyle}>
                        <Select defaultValue="gmail.com" style={{ width: 140}} name="optionEmail" >
                            <Option value="gmail">gmail.com</Option>
                            <Option value="naver">naver.com</Option>
                            <Option value="daum">daum.net</Option>
                        </Select>
                    </Col>
                </Row>
            </Row>
            <br/>
            {/*할인 및 부가결제*/}
            <Row style={{borderBottom:"1px solid black"}}>
                <Row style={{borderBottom:"1px solid black"}}>
                    <Col md={21}>
                        <div><h3>할인 및 부가결제</h3></div>
                    </Col>
                </Row>
                <Row style={{display:"flex"}}><div style={{fontSize:"18px"}}>TGL POINT</div>
                    <div style={{fontSize:"11px", margin:"7px 0 7px 3px", display:"flex"}}>
                        (사용가능 포인트:<div style={{color:"#6800A8", display:"flex"}}> {cashDummy.point}원</div>)
                    </div>
                </Row>
                <Row>
                    <Input style={{width:800}}/>
                    <Button name="pointAllUse" style={{width:200, marginLeft:10, border:"1px solid black"}}>전액사용</Button>
                </Row>
                <Row style={{fontSize:"11px", margin:"5px 0 5px"}}>
                    <p>1회 구매시 최대 사용 포인트는 3,000원으로 제한</p>
                    <p>포인트로만 결제 시, 결제금액이 0원으로 보여지는 것은 정상입니다.([결제하기] 버튼을 누르면 주문이 완료됩니다.)</p>
                </Row>
                <Row style={{background:"lightgray", height:"50px", padding:"10px"}}>
                    <Col md={20}/>
                    <Col md={4} style={{display:"flex", fontSize:"18px"}}>적용 금액: <div style={{color:"red"}}> -{cashDummy.point} 원</div></Col>
                </Row>
                <Row style={{display:"flex"}}><div style={{fontSize:"18px"}}>예치금</div>
                    <div style={{fontSize:"11px", margin:"7px 0 7px 3px", display:"flex"}}>
                        (사용가능 예치금:<div style={{color:"#6800A8", display:"flex"}}> -{cashDummy.deposit}원</div>)
                    </div>
                </Row>
                <Row>
                    <Input style={{width:800}}/>
                    <Button name="depositAllUse" style={{width:200, marginLeft:10, border:"1px solid black"}}>전액사용</Button>
                </Row>
                <Row style={{fontSize:"11px", margin:"5px 0 5px"}}>
                    예치금은 사용제한 없이 언제든 사용이 가능합니다.
                </Row>
                <Row style={{background:"lightgray", height:"50px", padding:"10px"}}>
                    <Col md={20}/>
                    <Col md={4} style={{display:"flex", fontSize:"18px"}}>적용 금액: <div style={{color:"red"}}> -{cashDummy.deposit} 원</div></Col>
                </Row>
            </Row>
            <br/>

            {/*결제정보*/}
            <Row style={{borderBottom:"1px solid black"}}>
                <Row style={{borderBottom:"1px solid black"}}>
                    <h3>결제 정보</h3>
                </Row>
                <Row style={{height:"15px"}}/>
                <Row>
                    <Col md={5} style={{paddingLeft:"5px"}}>주문상품</Col>
                </Row>
                <Row>
                    <Col md={5} style={{paddingLeft:"5px"}}>할인 및 부가결제</Col>
                </Row>
                <Row>
                    <Col md={5} style={{paddingLeft:"5px"}} >배송비</Col>
                </Row>

                <Row style={{background:"lightgray", height:"50px", padding:"10px"}}>
                    <Col md={20}/>
                    <Col md={2} style={{display:"flex", fontSize:"18px"}}>적용 금액: </Col>
                    <Col md={2} style={{display:"flex", fontSize:"18px" }}> {cashDummy.deposit} 원</Col>
                </Row>
            </Row>
        </div>

    </>
};

export default Order;