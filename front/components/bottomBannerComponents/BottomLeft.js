import React from 'react'
import styled from 'styled-components'
import shopLogo from '../../img/shopLogo.png'
import {Menu} from 'antd'

const BottomLeft = () =>{
    return(
        <>
            <div style={leftWrapper}>
                <BottomLogoImg src = {shopLogo}/>
                <Menu mode='horizontal' style={menu}>
                    <Menu.Item key = "introduceCompany">
                        회사소개
                    </Menu.Item>
                    <Menu.Item key = "term">
                        이용약관
                    </Menu.Item>
                    <Menu.Item key = "informationTerm">
                        개인정보처리방침
                    </Menu.Item>
                    <Menu.Item key = "checkCompanyInfo">
                        사업자정보확인
                    </Menu.Item>
                </Menu>
                <div>
                    <div style={textStyle}>상호 : 온플릭 | 대표 : 채수완 | 주소: 경기도 성남시 분당구 서현로 177 101-304</div>
                    <div style={textStyle}>사업자등록번호 : 717-64-00416 | 통신판매업 신고번호 : 2020-성남분당비-0204 | 개인정보관리 책임자 : 채수완</div>
                    <div style={textStyle}>고객센터 : 010-9858-1993 평일 오전 10:00 ~ 오후 4:00 / 주말,공휴일 휴무</div>
                    <div style={textStyle}>onfleek2020@naver.com</div>
                </div>

                <div style={copyRightStyle}>COPYRIGHT©THEGLITTERSLAB ALL RIGHT RESERVED</div>
            </div>
        </>
    )
}

const BottomLogoImg = styled.img`
    width:200px;
    height: 100px;
    margin-bottom:10px;
`;

const textStyle = {
    fontSize : "10px",
    color:"#E0E0E0",
    textAlign: "center",
    marginBottom: "5px",
}

const menu = {
    fontSize:"10px",
    lineHeight: "23px",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight:"25px",
    borderBottom: "none",
    marginBottom:"10px",
}

const leftWrapper = {
    display: "flex",
    flexDirection: "column",
    padding: "20px 30px",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
}

const copyRightStyle = {
    fontFamily: "monospace",
}

export default BottomLeft