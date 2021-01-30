import React from 'react'
import {Button, Menu} from 'antd'
import styled from 'styled-components'
import Link from "next/link";


const TopBar = () => {
    return(
        <Menu mode='horizontal' style={menu}>
            <Menu.Item key="myPage">
                <Link href='/Mypage'><a>마이 프로필</a></Link>
                </Menu.Item>

            <Menu.Item key="login">
                로그인
                </Menu.Item>
            <Menu.Item key="signUp">
                회원가입
                </Menu.Item>
            <Menu.Item key="shoppingList">
                <Link href="/Basket"><a>장바구니</a></Link>

                </Menu.Item>
            <Menu.Item key="QnA">
                Q&A
                </Menu.Item>
            <Menu.Item key="notice">
                NOTICE
                </Menu.Item>
            <Menu.Item key="tgl">
                TGL
                </Menu.Item>
        </Menu>

    )
}


const menu = {
    fontSize:"10px",
    lineHeight: "23px",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight:"25px",
}

export default TopBar