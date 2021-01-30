import React from 'react'
import styled from 'styled-components'

const ProductImg = ({src}) =>{
    return(
        <Img src={src}/>
    )
}

const Img = styled.img`
    height: 200px;
    flex-grow : 1;
    border : 1px solid #ECECEC;
`

export default ProductImg