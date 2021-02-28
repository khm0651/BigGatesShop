import React from 'react'
import styled from 'styled-components'
import {Divider} from 'antd'

const ReviewTopBar = () => {
    return(
        <ReviewTopBarWrapper>
            <No>
                No.
            </No>
            <Subject>
                S U B J E C T
            </Subject>
            <Writer>
                W R I T E R
            </Writer>
        </ReviewTopBarWrapper>
    )
}

const ReviewTopBarWrapper = styled.div`
    display:flex;
`

const No = styled.div`
    flex: 0.2;
    text-align: center;
`

const Subject = styled.div`
    flex: 3.8;
    text-align: center;
`

const Writer = styled.div`
    flex: 1;
    text-align: center;
`

export default ReviewTopBar