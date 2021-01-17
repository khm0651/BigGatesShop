import React from 'react';
import {Form, Input, Checkbox, Button, Select, InputNumber,Row, Col} from "antd";
import Head from 'next/head'

const {Option} = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

const SignUp = () => {
    return<>
        <Head>
            <title>NodeBird</title>
            <link rel ="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            <script src ="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
        </Head>
        <div>회원가입 페이지</div>
        <Form>
            <div>
                <label htmlFor="user-id">ID</label>
                <br />
                <Input name = "user-id" />
            </div>
            <div>
                <label htmlFor="user-password">PW</label>
                <br />
                <Input name ="user-password" type="password" />
            </div>
            <div>
                <label htmlFor="user-password-check">PW 확인</label>
                <br />
                <Input name ="user-password-check" type="password" />
            </div>
            <div>
                <label htmlFor="user-name">이름</label>
                <br />
                <Input name = "user-name"  />
            </div>
            <div>
                <label htmlFor="user-tel">전화번호</label>
                <br />
                <Select defaultValue="010" style={{ width: 150, marginRight:10 }} onChange={handleChange}>
                    <Option value="010">010</Option>
                    <Option value="011">011</Option>
                </Select> -
                <Input name="user-tel1" style={{width:150, margin:10}}/>
                -
                <Input name="user-tel2" style={{width:150, margin:10}}/>

            </div>
            <div>
                <label htmlFor="user-address">주소</label>
                <br />
                <Input name = "user-addressNumber" style={{width:'150px'}} />
                <Button type="primary" htmlType="submit" href='./findAddress'>우편번호 찾기</Button>
                <br/>
                <Input name = "user-address1"/>
                <br/>
                <Input name = "user-address2"/>
            </div>
            <div>
                <label htmlFor="user-email">E-mail</label>
                <br/>
                <Input name = "user-email"/>
            </div>

            <div>
                <Checkbox name="user-term" >
                    이용약관 및 개인정보 수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다.</Checkbox>
            </div>
            <div>
                <Button type="primary" htmlType="submit">회원가입</Button>
            </div>
        </Form>
    </>
}

export default SignUp;