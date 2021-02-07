import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const ProductImg = ({src,id}) =>{
    const hrefInfo = {
        pathname : '/introduce',
        query : {
            id : id
        }
    }
    return(
        <Link href={hrefInfo}><Img src={src}/></Link>
    )
}

const Img = styled.img`
    width: 25%;
    height: 200px;
    flex-grow : 1;
    border : 1px solid #ECECEC;
    cursor: pointer;
`

export default ProductImg