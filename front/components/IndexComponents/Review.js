import React from 'react'
import {Col} from 'antd'
import styled from 'styled-components'

const Review = ({img,id,content}) =>{
    return(
        <Col span={4} style={wrapper}>
            <ReviewImg src={img} />
            <ReviewId>{id}님의 후기</ReviewId>
            <ReviewContent>{content}</ReviewContent>
        </Col>
    )
}

const wrapper = {
    display: "flex",
    flexDirection: "column",
}

const ReviewImg = styled.img`
    width:190px;
    height: 200px;
    margin-bottom:8px;
    align-self:center;
`

const ReviewId = styled.div`
    font-size:12px;
    font-weight:bold;
    margin-bottom:3px;
`

const ReviewContent = styled.div`
    font-size:12px;
    color:darkgray;
`

export default Review