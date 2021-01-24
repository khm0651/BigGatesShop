import React from 'react'
import {Button} from 'antd'
import instargramLogo from '../../img/instargram.png'
import styled from 'styled-components'

const BottomRight = () => {
    return (
        <BottomRightWrapper >
            <div style={instarWrapper}>
                <img src={instargramLogo} style={imgStyle}/>
                <div style={instarIdStyle}>
                    @theglitterslab
                </div>
                <Button style={followBtnStyle}>
                    +follow
                </Button>
            </div>
            <div style={textStyle}>
                무통장계좌 안내
            </div>
            <div style={textStyle}>
                하나은행 417-910360-74507
            </div>
        </BottomRightWrapper>
    )
}

const BottomRightWrapper = styled.div`
    padding: 20px 30px;
    flex: 1;
`;

const textStyle = {
    fontSize : "10px",
}

const followBtnStyle = {
    height: "25px",
    padding: "0px 25px",
}

const instarIdStyle = {
    marginRight : "15px",
}

const instarWrapper = {
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    marginBottom:"15px",
}

const imgStyle = {
    width : "25px",
    height : "25px",
    marginRight : "15px",
}

export default BottomRight