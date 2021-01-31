import React, { useState, useCallback } from "react";
import { Form, Input, Checkbox, Button, Select } from "antd";
import {useDispatch, useSelector} from "react-redux";
import DaumPostcode from 'react-daum-postcode';

const {Option} = Select;



function handleChange(value) {
    console.log(`selected ${value}`);
}

export const useInput = (initValue = null) => {
    const [Value, setter] = useState(initValue);
    const handler = useCallback((e) => {
        setter(e.target.value);
    },[]);
    return[Value,handler];
};

const SignUp = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const[password, setPassword] = useState('');
    const[passwordCheck, setPasswordCheck] = useState('');
    const[term,setTerm] = useState(false);
    const[passwordError, setPasswordError] = useState('');
    const[termError, setTermError] = useState(false);

    const onSubmit =useCallback((e)=>{
        e.preventDefault();
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
    },[password, passwordCheck, term]);

    const onChangeId=(e)=>{
        setId(e.target.value);
    };

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangePassword=(e)=>{
        setPassword(e.target.value);
    };

    const onChangePasswordCheck=useCallback((e)=>{
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    },[password]);

    const onChangeTerm =useCallback((e)=>{
        setTermError(false);
        setTerm(e.target.checked);
    },[]);

    /*const Postcode = () => {
        const handleComplete = (data) => {
            let fullAddress = data.address;
            let extraAddress = '';

            if (data.addressType === 'R') {
                if (data.bname !== '') {
                    extraAddress += data.bname;
                }
                if (data.buildingName !== '') {
                    extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
                }
                fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
            }

            console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        }

        return (
            <DaumPostcode
                onComplete={handleComplete}
                { ...props }
            />
        );
    }*/


    return<>
        <Form onSubmit={ onSubmit } style={{marginLeft:500,marginRight:500}}>

            <br/>
            <div>회원가입</div>
            <br/>
            <div>
                <label htmlFor="user-id">ID</label>
                <br />
                <Input name = "user-id" value={id} required onChange={onChangeId} />
            </div>
            <div>
                <label htmlFor="user-password">PW</label>
                <br />
                <Input name ="user-password" type="password"  value={password} required onChange={onChangePassword} />
            </div>
            <div>
                <label htmlFor="user-password-check">PW 확인</label>
                <br />
                <Input name ="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
                {passwordError && <div style={{ color : 'red'}}>비밀번호가 틀립니다</div>}
            </div>
            <div>
                <label htmlFor="user-name">이름</label>
                <br />
                <Input name = "user-name"  value={name} required onChange={onChangeName} />
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
                <Input name = "user-addressNumber"  style={{width:'150px'}} />
                <Button style={{marginLeft:5}} type="primary" htmlType="submit" href='./findAddress'>우편번호 찾기</Button>
                <br/>
                <Input style={{marginTop:5, marginBottom:5}} name = "user-address1"/>
                <br/>
                <Input name = "user-address2"/>
            </div>
            <div>
                <label htmlFor="user-email">E-mail</label>
                <br/>
                <Input name = "user-email"/>
            </div>

            <div>
                <Checkbox name="user-term" checked={term} onChange={onChangeTerm}  style={{marginTop:5}}>
                    이용약관 및 개인정보 수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다.</Checkbox>
                {termError && <div style={{ color : 'red'}}>약관에 동의하셔야합니다</div>}
            </div>
            <div>
                <Button type="primary" htmlType="submit" style={{marginTop:5}} href='./signUpSuccess'>회원가입</Button>
            </div>
        </Form>
    </>
}

export default SignUp;