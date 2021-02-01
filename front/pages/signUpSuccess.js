import React from 'react';
import {Card, Form, Input, Button, List, Col, Row,} from "antd";
import instargramLogo from "../img/instargram.png";

const dummy = {
    id: 'nanisister',
    name: '채수완',
    email: 'nanisister@naver.com'
}
const style1 = {
    borderRadius: "20px",
    height: "200px",
    width: "700px",
    marginLeft: "150px"
};

const img1 = {
    width: "200px",
    height: "200px",
    marginBottom: "10px",

}

const SignUpSuccess = () => {
    return <>

        <br/><br/>

        <br/><br/>
        <div style={{marginLeft: "500px"}}>
            <div style={{marginLeft: "350px"}}>
                <div><img src={instargramLogo} style={img1}/></div>
                <div style={{fontSize: "20px"}}><b>회원가입이 완료되었습니다.</b></div>
            </div>

            <br/>
            <Card title="The Glitters Lab에 오신걸 환영합니다♥" style={style1}>
                <Row style={{display : "flex", flexDirection : "row"}}>
                    <Col md={5}>
                        <img src={instargramLogo} style={{width: "100px",}}/>
                    </Col>
                    <Col md={7} style={{marginLeft: 5}}>
                        <Row>
                            <div><b>ID: </b>{dummy.id}</div>
                        </Row>
                        <Row>
                            <div><b>이름: </b>{dummy.name}</div>
                        </Row>
                        <Row>
                            <div><b>이메일: </b>{dummy.email}</div>
                        </Row>
                    </Col>
                </Row>
            </Card>
            <br/><br/><br/>
            <Button style={{marginTop: 10, marginLeft: "410px", background: "#bd00f3"}} href='./index'><b>완료</b></Button>

        </div>
    </>
}

export default SignUpSuccess;