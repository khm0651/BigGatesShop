import React from 'react'
import styled from 'styled-components'
import ProductImg from './ProductImg'


const Carousel = ({title,img}) => {
    console.log("carousel",title,img)
    return(
        <Wrapper>
            <Title>
                {title}
            </Title>
            <ImgWrapper>
                {img.map( (img) => {
                    return (
                        <ProductImg key={img} src={img.src}/>
                    )
                })}
            </ImgWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display : flex;
    flex : 1;
    justify-content:center;
    align-items:center;
    margin-top:25px;
    flex-direction : column;
`

const Title = styled.div`
    font-size : 15px;
    color : darkgray;
    margin-bottom:10px;
`

const ImgWrapper = styled.div`
    display:flex;
    flex-direction:row;
    width: -webkit-fill-available;
`

export default Carousel