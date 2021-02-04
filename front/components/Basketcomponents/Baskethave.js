import React from "react";
import {Row, Col, Checkbox, Button} from "antd";
// import TGLPick from "../IndexComponents/TglPick";
import imgfile1 from '../../img/book1.png';
import imgfile2 from '../../img/book2.png';
import imgfile3 from '../../img/book3.png';
import Link from "next/link";


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
    id : 2,
    product : "인생은 이태현처럼",
    option :"RED", number :"2",
    point :"999P",
    delivery : "기본 배송",
    price :"150,000",
    ToTal : "150,000",

}
const dummylist3 = {
    id : 3,
    product : "김치는 한국거다",
    option :"RED", number :"2",
    point :"999P",
    delivery : "기본 배송",
    price :"200,00,000",
    ToTal : "200,00,000",

}

const Total = {
   Totalproduct : " 100,000 ",
    Totaldelivery : "4,000",
    Totaldelmoney : "50,000",


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
                    <Col md = {3} style={bb6}> 배송비 </Col>
                    <Col md = {1} style={bb7}> TOTAL </Col>
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
                    <Col md = {3}  style={bb6}> {dummylist1.price}  </Col>
                    <Col md = {1}  style={bb7}> {dummylist1.ToTal}  </Col>
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
                    <Col md = {3}  style={bb6}> {dummylist2.price}  </Col>
                    <Col md = {1}  style={bb7}> {dummylist2.ToTal}  </Col>
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
                    <Col md = {3}  style={bb6}> {dummylist3.price}  </Col>
                    <Col md = {1}  style={bb7}> {dummylist3.ToTal}  </Col>
                </Row>
                <Row style = {cc}>
                    <Col style ={cc0}><Button> 선택한 상품 삭제 </Button></Col>
                    <Col style = {cc1}> 상품 구매 금액 : <b>{Total.Totalproduct}</b> + 배송비 {Total.Totaldelivery} = {Total.Totaldelmoney}원</Col>
                </Row>
            </div>
            <div style={{marginTop:"15px"}}>
                <Row style={dd}>
                    <Col md ={5} style={dd0}> 총 상품 금액 </Col>
                    <Col md ={1}></Col>
                    <Col md ={3} style = {dd1}> 총 배송비</Col>
                    <Col md ={9} style = {{marginLeft:"20px"}}></Col>
                    <Col md ={4} style = {dd2} > 결제 예정 금액 </Col>
                </Row>
                <Row style = {ee}>
                    <Col md ={5} style={dd0}> {Total.Totalproduct}원</Col>
                    <Col md ={2} style = {{display: "flex", alignItems: "center"}}>+</Col>
                    <Col md ={2} style={ee0}>{Total.Totaldelivery}원</Col>
                    <Col md={4} style={ee1}>(40,000원 이상 무료배송)</Col>
                    <Col md ={5}style={ee2}> =</Col>
                    <Col md ={6}style={dd2}> {Total.Totaldelmoney}원</Col>
                </Row>
            </div>
            <div style = {ff}>
                <Col><Button ><Link href="/index">쇼핑 계속하기</Link></Button></Col>
                {/*<Link href="/index"><a></a></Link>*/}
                {/*<Col md={14} style ={{marginRight:"26px"}}></Col>*/}
                <Col style ={{marginLeft: "524px", marginRight: "10px"}}><Button> 선택 상품 주문</Button></Col>
                <Col style ={{marginRight:"17px"}}><Button> 전체 상품 주문</Button></Col>
            </div>
            <div style={{marginTop : "45px"}}>
                <div style ={{fontSize:"12px" , marginBottom: "10px"}}><b> 장바구니 이용 안내</b> </div>
                <div style={fontstyle}> 선택하신 상품의 수량을 변경하시려면 수랑 변경 후 [수정]버튼을 누르시면 됩니다.</div>
                <div style={fontstyle}> 장바구니에 담긴 상품은 30일동안 보관됩니다. 보관된 상품은 30일 이후에 자동 삭제되오니 장바구니에서 삭제된 경우 다시 장바구니에 담아주세요.</div>
                <div style={fontstyle}> 장바구니 왼쪽 체크버튼을 이용하여 원하시는 상품만 주문하실 수 있습니다. </div>

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
    marginBottom : "30px",

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
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    margin:"3px",
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
    display : "flex",
    flexDirection:"row",
    backgroundColor : "lightgray",
    width :"900px",
    height: "50px",

}
const cc0 ={
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    marginLeft : "10px"

}
const cc1 ={
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15px",
    marginLeft: "412px",
}
const dd0 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
const dd1 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px",
}
const dd2 ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

}

const dd ={
    display: "flex",
    flexDirection:"row",
    border: "1px solid lightgray",
    width :"900px",
    height: "40px",
    fontSize : "14px",
    color: "gray",

}
const ee ={
    display: "flex",
    flexDirection:"row",
    border :"1px solid lightgray",
    // justifyContent: "center",
    // alignItems: "center",
    width :"900px",
    height: "50px",
    fontSize : "20px",

}

const ee0 ={
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

}

const ee1 ={
    display: "flex",
    alignItems:" center",
    fontSize: "10px",
}
const ee2 ={
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
}

const ff = {
    marginTop :"15px",
    display: "flex",
    flexDirection:"row",
    width :"900px",
}

const fontstyle = {
    fontSize: "12px",
    color : "darkgray",
}

export default Baskethave;