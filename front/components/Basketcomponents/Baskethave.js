import React from "react";
import {Row, Col,  Checkbox, Divider } from "antd";
const Basketdummy ={
    basketpoint : 999999,
    basketmoney : 999999,
    cupon :"N"
}

const dummylist1 = {
    id : 1,
        product : "토익 스파르타",
        option :"PINK", number :"2",
        point :"999P",
        delivery : "기본 배송",
        price :4000,
        ToTal : "12,500",

}

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const Baskethave =()=>{
    return (
        <>
            <div style={aa}>
                <Col style = {aa1}>혜택 정보 </Col>
                <Col style={aa2}> 가용 포인트 : <Col style={{color : "purple"}}>{Basketdummy.basketpoint}P</Col></Col>
                <Col style={aa3}> 예치금 : <Col style={{color : "purple"}}> {Basketdummy.basketmoney}원</Col></Col>
                <Col style={aa4}> 쿠폰 :  {Basketdummy.cupon}개</Col>
            </div>
            <div>
                <Row style={bb}>
                    <Col style={bb0}><Checkbox onChange={onChange}></Checkbox> </Col>
                    <Col style={bb1}> 상품명 </Col>
                    <Col style={bb2}> 옵션 </Col>
                    <Col style={bb3}> 개수 </Col>
                    <Col style={bb4}> 적립포인트 </Col>
                    <Col style={bb5}> 배송구분 </Col>
                    <Col style={bb6}> 배송비 </Col>
                    <Col style={bb7}> TOTAL </Col>
                </Row>
                <Row style = {bb}>
                    <Col style={bb0}><Checkbox onChange={onChange}></Checkbox> </Col>
                    <Col> img</Col>
                    <Col style={bbb1}> {dummylist1.product} </Col>
                    <Col style={bb2}> {dummylist1.option}  </Col>
                    <Col style={bb3}> {dummylist1.number}  </Col>
                    <Col style={bb4}> {dummylist1.point}  </Col>
                    <Col style={bb5}> {dummylist1.delivery}  </Col>
                    <Col style={bb6}> {dummylist1.price}  </Col>
                    <Col style={bb7}> {dummylist1.ToTal}  </Col>
                </Row>








            </div>



        </>
    );
};

const aa ={
    display: "flex",
    flexDirection:"row",
    border: "1px solid lightgray",
    width :"900px",
    height: "40px",
    fontSize : "17px",
    color: "gray",
    marginBottom : "20px",

}
const aa1 ={
    width: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "1px solid lightgray",
    color: "gray",
}
const aa2 ={
    width: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "1px solid lightgray",
    color: "gray",
}
const aa3 ={
    width: "170px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "1px solid lightgray",
    color: "gray",
}
const aa4 ={
    width: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "gray",
}
const bb ={
    display: "flex",
    flexDirection:"row",
    border: "1px solid lightgray",
    width :"900px",
    height: "40px",
    fontSize : "17px",
    color: "gray",
}
const bb0 ={
    width: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft : "10px",
    marginRight : "20px",
}
const bb1 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "85px",
}
const bbb1 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "55px",
}
const bb2 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "50px",
}
const bb3 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "50px",
}
const bb4 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "130px",
}
const bb5 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "40px",
}
const bb6 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "40px",
}
const bb7 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "40px",
}



export default Baskethave;