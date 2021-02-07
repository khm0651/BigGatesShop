import React from 'react'
import {Row,Col} from 'antd'
import Review from './Review'

const BestReview = ({data}) => {
    return(
        <Row style={bestReviewWrapperStyle}>
            <Row style={titleStyle}>
                BEST REVIEW
            </Row>
            <Row>
                {data.map((item)=>{
                    return <Review img={item.img} id={item.id} content={item.content}/>
                })}
            </Row>
        </Row>

    )
}

const bestReviewWrapperStyle = {
    marginTop:"70px",
}

const titleStyle = {
    marginBottom:"12.5px",
    fontSize:"14px",
    fontWeight:"bold",
}
export default BestReview