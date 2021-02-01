import React from "react";
import {Row, Col,  Checkbox, Divider } from "antd";
// import TGLPick from "../IndexComponents/TglPick";
import imgfile1 from '../../img/book1.png';
import imgfile2 from '../../img/book2.png';
import imgfile3 from '../../img/book3.png';

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
const dummylist2 = {
    id : 1,
    product : "인생은 이태현처럼",
    option :"RED", number :"2",
    point :"999P",
    delivery : "기본 배송",
    price :"150,000",
    ToTal : "150,000",

}
const dummylist3 = {
    id : 1,
    product : "김치는 한국거다",
    option :"RED", number :"2",
    point :"999P",
    delivery : "기본 배송",
    price :"200,00,000",
    ToTal : "200,00,000",

}

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const Baskethave =()=>{
    return (
        <>
            <div style={aa}>
                <Col style={aa1}>혜택 정보 </Col>
                <Col style={aa2}> 가용 포인트 : <Col style={{color : "purple"}}>{Basketdummy.basketpoint}P</Col></Col>
                <Col style={aa3}> 예치금 : <Col style={{color : "purple"}}> {Basketdummy.basketmoney}원</Col></Col>
                <Col style={aa4}> 쿠폰 :  {Basketdummy.cupon}개</Col>
            </div>
            <div>
                <Row style={bb}>
                    <Col md = {2} style={bb0}><Checkbox onChange={onChange}></Checkbox> </Col>
                    <Col md = {4} style={bb1}></Col>
                    <Col md = {3} style={bb1}> 상품명 </Col>
                    <Col md = {2} style={bb2}> 옵션 </Col>
                    <Col md = {2} style={bb3}> 개수 </Col>
                    <Col md = {3}> </Col>
                    <Col md = {3} style={bb4}> 적립포인트 </Col>
                    <Col md = {2} style={bb5}> 배송구분 </Col>
                    <Col md = {2} style={bb6}> 배송비 </Col>
                    <Col md = {3} style={bb7}> TOTAL </Col>
                </Row>
                <Row style = {bb00}>
                    <Col md = {2}  style={bb0}><Checkbox onChange={onChange}></Checkbox> </Col>
                    <Col md = {4}  style={bbb1} > <img src={imgfile1} /></Col>
                    <Col md = {3}  style={bbb1}> {dummylist1.product} </Col>
                    <Col md = {2}  style={bb2}> {dummylist1.option}  </Col>
                    <Col md = {2}  style={bb3}> {dummylist1.number}  </Col>
                    <Col md = {3}> </Col>
                    <Col md = {3}   style={bb4}> {dummylist1.point}  </Col>
                    <Col md = {2}  style={bb5}> {dummylist1.delivery}  </Col>
                    <Col md = {2}  style={bb6}> {dummylist1.price}  </Col>
                    <Col md = {3}  style={bb7}> {dummylist1.ToTal}  </Col>
                </Row>
                <Row style = {bb00}>
                    <Col md = {2}  style={bb0}><Checkbox onChange={onChange}></Checkbox> </Col>
                    <Col md = {4}  style={bbb1} > <img src={imgfile2} /></Col>
                    <Col md = {3}  style={bbb1}> {dummylist2.product} </Col>
                    <Col md = {2}  style={bb2}> {dummylist2.option}  </Col>
                    <Col md = {2}  style={bb3}> {dummylist2.number}  </Col>
                    <Col md = {3}> </Col>
                    <Col md = {3}   style={bb4}> {dummylist2.point}  </Col>
                    <Col md = {2}  style={bb5}> {dummylist2.delivery}  </Col>
                    <Col md = {2}  style={bb6}> {dummylist2.price}  </Col>
                    <Col md = {3}  style={bb7}> {dummylist2.ToTal}  </Col>
                </Row>
                <Row style = {bb00}>
                    <Col md = {2}  style={bb0}><Checkbox onChange={onChange}></Checkbox> </Col>
                    <Col md = {4}  style={bbb1} > <img src={imgfile3} /></Col>
                    <Col md = {3}  style={bbb1}> {dummylist3.product} </Col>
                    <Col md = {2}  style={bb2}> {dummylist3.option}  </Col>
                    <Col md = {2}  style={bb3}> {dummylist3.number}  </Col>
                    <Col md = {3}> </Col>
                    <Col md = {3}   style={bb4}> {dummylist3.point}  </Col>
                    <Col md = {2}  style={bb5}> {dummylist3.delivery}  </Col>
                    <Col md = {2}  style={bb6}> {dummylist3.price}  </Col>
                    <Col md = {3}  style={bb7}> {dummylist3.ToTal}  </Col>
                </Row>
                <Row style = {cc}> bb</Row>
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
    height: "25px",
    fontSize : "15px",
    color: "gray",
}
const bb00 ={
    display: "flex",
    flexDirection:"row",
    border: "1px solid lightgray",
    width :"900px",
    height: "auto",
    fontSize : "10px",
    color: "gray",
}
const bb0 ={
    width: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
 //   marginLeft : "10px",
 //   marginRight : "20px",
}
const bb1 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  //  marginLeft: "85px",
}
const bbb1 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  //  marginLeft: "55px",
}
const bb2 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  //  marginLeft: "50px",
}
const bb3 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
 //   marginLeft: "50px",
}
const bb4 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
 //   marginLeft: "130px",
}
const bb5 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
 //   marginLeft: "40px",
}
const bb6 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  //  marginLeft: "40px",
}
const bb7 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   // marginLeft: "40px",
}
const cc ={
    backgroundColor : "lightgray",
    width :"900px",
    height: "auto",
}


export default Baskethave;