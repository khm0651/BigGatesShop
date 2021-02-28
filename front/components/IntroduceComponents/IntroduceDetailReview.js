import React,{useState} from 'react'
import styled from 'styled-components'
import {Divider} from 'antd'
import ReviewTopBar from './ReviewTopBar'
import ReviewItem from './ReviewItem'
import ReviewPageNavigation from './ReviewPageNavigation'

const IntroduceDetailReview = ({detail,review}) =>{
    const [isShowDetail,setIsShowDetail] = useState(true)
    const [currentPage,SetCurrentPage] = useState(1)
    const [perPageNum,SetPerPageNum] = useState(3)

    const indexOfLast = currentPage * perPageNum
    const indexOfFirst = indexOfLast - perPageNum

    const currentReview = (review) =>{
        var temp = review.slice()
        var currentReviewList = temp.reverse().slice(indexOfFirst,indexOfLast)
        return currentReviewList
    }

    const detailClick = () =>{
        setIsShowDetail(true)
    }

    const reviewClick = () =>{
        setIsShowDetail(false)
    }

    return(
        <>
        <Wrapper>
            <Divider style={dividerStyle}/>
            <DetailReviewWrapper >
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
                <ReviewWrapper className="ReviewTopBar">
                    <ReviewTopBar />
                    <Divider style={reviewDividerStyle}/>
                    {currentReview(review).map((reviewInfo)=>{
                        return <ReviewItem reviewInfo = {reviewInfo}/>
                    })}
                    <ReviewPageNavigation currentPage={currentPage} perPageNum={perPageNum} totalReviewNum={review.length} setCurrentPage ={SetCurrentPage}/>
                </ReviewWrapper>
                
            }
        </>
    )
}

const reviewDividerStyle = {
    margin : "10px 0",
    width: "100%",
    height: "2.5px",
}

const ReviewWrapper = styled.div`
    margin: 60px 170px;
    width: 1119px;
`

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