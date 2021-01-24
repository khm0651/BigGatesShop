import React from 'react'
import styled from 'styled-components'

const ProductImg = ({src}) =>{
    console.log(src)
    return(
        <Img src={"https://lh3.googleusercontent.com/proxy/FZR0VRNwi_BE05IdmF2e3yJ8wK_6Eg40NY6ecofLA1YHN3d5asq2y1OFP3d4LTbq5TVDNy7Pw3iqQ19W3951LQmmTwwWrusOPr8jmSfi5vNGsSHcvWg_z5I5uksUnAj4JFjpaI0DlussOMEPQXIxd3sMqJ0u9TrJqACG0pGuIKdxKsyM-pwDPLAizKjs61AN-mg_Kpz-t1b52Of5H1LeuwTrkQWD-PC1h6tEeSwsEHCCv2VuFg_44jLpYbfcznQCgewvbeUFbumFtkK6Q0eraIqRUlQEcTPafTGl_BKAMzPGYelJ2ruoJNZorDOS2Ll_u_VD8Drl2ELDoSBV9Ps0fuvkY667kfT02EW3OeYqcbDyMhABRtoRpQ"}/>
    )
}

const Img = styled.img`
    height: 200px;
    flex : 1;
    border : 1px solid #ECECEC;
`

export default ProductImg