import React from 'react'
import BottomLeft from './BottomLeft'
import BottomRight from './BottomRight'
import styled from 'styled-components'


const BottomBanner = () => {
    return(
            <BottomWrapper>
                <BottomLeft />
                <BottomRight />
            </BottomWrapper>

        
    )
}

const BottomWrapper = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:90px;
    border-top: 1px solid #ECECEC;
`;

export default BottomBanner