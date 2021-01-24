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

`;

export default BottomBanner