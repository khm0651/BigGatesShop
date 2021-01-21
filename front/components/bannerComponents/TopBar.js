import React from 'react'
import {Menu} from 'antd'
import styled from 'styled-components'

const TopBar = () => {
    return(
        <Menu mode='horizontal' style={menu}>
            <Menu.Item key="myPage">
                마이페이지
                </Menu.Item>
            <Menu.Item key="login">
                로그인
                </Menu.Item>
            <Menu.Item key="signUp">
                회원가입
                </Menu.Item>
            <Menu.Item key="shoppingList">
                장바구니
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