import React from 'react';
import {Input, Button, Row, Col, Divider} from "antd";


const Login = () => {
    return<>
        <div style={{width:"500px", marginTop:"100px", marginLeft:"750px"}}>
            <Input name="loginId" placeholder = "ID" style={{marginBottom:"5px"}} />
            <Input name="loginPw" placeholder = "PW" style={{marginBottom:"10px"}}/>
            <Button style={{ color:"white", background:"#6800A8", width:"500px"}}>LOG-IN</Button>

            <Row justify="end" style={{width:"500px", marginTop:"10px"}}>
                <Col span={18}/>
                <Col span={3} style={{ paddingLeft:"10px", borderRight:"1px solid lightgray"}}><Button type="text">ID찾기</Button></Col>
                <Col span={3} style={{ paddingLeft:"10px"}}>PW찾기</Col>
            </Row>
        </div>

    </>

};

export default Login;