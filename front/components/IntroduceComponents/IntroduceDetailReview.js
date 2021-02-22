import React,{useState} from 'react'
import styled from 'styled-components'
import {Divider} from 'antd'

const IntroduceDetailReview = ({detail,review}) =>{
    const [isShowDetail,setIsShowDetail] = useState(true)

    const detailClick = () =>{
        setIsShowDetail(true)
    }

    const reviewClick = () =>{
        setIsShowDetail(false)
    }
    console.log(detail,review)
    return(
        <>
        <Wrapper>
            <Divider style={dividerStyle}/>
            <DetailReviewWrapper>
                    <Detail onClick={detailClick} >
                        DETAIL
                    </Detail>
                    <Review onClick={reviewClick}>
                        REVIEW
                    </Review>
            </DetailReviewWrapper>    
            <Divider style={dividerStyle}/>
        </Wrapper>
            {
                isShowDetail?
                <DetailWrapper>
                    {detail.imgs.map((v)=>{
                        return <img src={v} style={{width:"100%",marginBottom:"20px",}}/>
                    })}
                </DetailWrapper>
                :
                <div>
                    hi review
                </div>
            }
        </>
    )
}

const Wrapper = styled.div`
    position:sticky;
    top:0px;
    background-color:white;
`

const DetailReviewWrapper = styled.div`
    display:flex;

`

const DetailWrapper = styled.div`
    padding: 20px 250px;
`

const Detail = styled.div`
    flex:1;
    border-right: 1px solid #E8E8E8;
    text-align:center;
    cursor: pointer;
`

const Review = styled.div`
    flex:1;
    text-align:center;
    cursor: pointer;
`

const dividerStyle = {
    margin : "10px 0",
    width: "100%",
}


export default IntroduceDetailReview