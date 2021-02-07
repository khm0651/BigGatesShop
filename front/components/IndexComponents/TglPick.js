import React from 'react'
import styled from 'styled-components'
import ProductImg from './ProductImg'
import Link from 'next/link'

const TGLPick = ({img}) =>{
    return(
        <TGLWrapper>
            <TGLTitle>
                TGL'S PICK
            </TGLTitle>

            <TGLImgWrapper>
                {img.map((v,i)=>{
                    return <ProductImg key = {i} src={v.src} id={v.id}/>
                })}
            </TGLImgWrapper>
        </TGLWrapper>
        
    )
}

const TGLWrapper = styled.div`
    display : flex;
    flex : 1;
    justify-content:center;
    align-items:center;
    margin-top:40px;
    flex-direction : column;
    margin-bottom:70px;
`

const TGLTitle = styled.div`
    font-size : 15px;
    color : darkgray;
    margin-bottom:10px;
`

const TGLImgWrapper = styled.div`
    display:flex;
    flex-direction:row;
    width: -webkit-fill-available;
`

export default TGLPick