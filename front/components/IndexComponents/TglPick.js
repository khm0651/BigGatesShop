import React from 'react'
import styled from 'styled-components'
import ProductImg from './ProductImg'

const TGLPick = ({img}) =>{
    return(
        <TGLWrapper>
            <TGLTitle>
                TGL'S PICK
            </TGLTitle>

            <TGLImgWrapper>
                {img.map((v,i)=>{
                    return <ProductImg key = {i} src={v.src}/>
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
    margin-top:25px;
    flex-direction : column;
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