import React from 'react';
import {Card, Form, Input, Button, List, Col, Row,} from "antd";

const dummy = {
    id: 'nanisister',
    name: '채수완',
    email: 'nanisister@naver.com'
}
const style1 = {

    borderRadius: "20px 20px 20px 20px",
    height: "200px",
    width: "420px",
    paddingLeft: "10px",
};

const SignUpSuccess = () => {
    return <>

        <br/><br/>

        <br/><br/>
        <div style={{marginLeft:200}}>
            <div></div>
            <div><b>회원가입이 완료되었습니다.</b></div>
            <br/>
            <Card title="The Glitters Lab에 오신걸 환영합니다♥" style={style1}>
                <Row>
                    <Col md={4}>
                        image
                    </Col>
                    <Col md={8}>
                        <p>ID: </p>
                        <p>이름: </p>
                        <p>이메일: </p>
                    </Col>
                </Row>


            </Card>
            <Button color='#6d0aef' style={{marginTop: 10}} href='./index'>완료</Button>

        </div>
    </>
}

export default SignUpSuccess;