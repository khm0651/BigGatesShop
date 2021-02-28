import React from 'react'
import styled from 'styled-components'

const ReviewContent = ({content}) => {
    return(
        <ReviewContentWrapper >
            <No>
                
            </No>
            <Content>
                {content}
            </Content>
            <Writer>
                
            </Writer>
        </ReviewContentWrapper>
    )
}

const ReviewContentWrapper = styled.div`
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

const Content = styled.div`
    flex: 3.8;
    padding-left:50px;
    display:flex;
    align-items:center;
`

const Writer = styled.div`
    flex: 1;
    text-align: center;
`

export default ReviewContent