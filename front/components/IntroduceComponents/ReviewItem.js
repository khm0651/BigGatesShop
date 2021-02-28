import React,{useState} from 'react'
import styled from 'styled-components'
import ReviewContent from './ReviewContent'

const ReviewItem = ({reviewInfo}) => {
    const [isOpen,setIsOpen] = useState(false)

    const toggleOpen = () =>{
        setIsOpen(!isOpen)
    }
    return(
        <>
        <ReviewWrapper onClick={toggleOpen} draggable={false}>
            <No>
                {reviewInfo.no}
            </No>
            <Subject>
                <SubjectTitle>
                    {reviewInfo.title}
                </SubjectTitle>
                {reviewInfo.thumbnail ? 
                <SubjectImg src={reviewInfo.thumbnail}/>
                : null
                }
                
            </Subject>
            <Writer>
                {reviewInfo.writer}
            </Writer>
        </ReviewWrapper>
        {isOpen ? <ReviewContent content={reviewInfo.content}/> : null}
        </>
    )
}

const SubjectTitle = styled.div`
    width:80%;
`

const SubjectImg = styled.img`
    width: 130px;
    height: 140px;
`

const ReviewWrapper = styled.div`
    display:flex;
    margin-top: 10px;
    border-bottom: 1px solid #EDEDED;
    height: fit-content;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    padding-bottom:10px;
`

const No = styled.div`
    flex: 0.2;
    text-align: center;
`

const Subject = styled.div`
    flex: 3.8;
    padding-left:50px;
    display:flex;
    align-items:center;
`

const Writer = styled.div`
    flex: 1;
    text-align: center;
`

export default ReviewItem