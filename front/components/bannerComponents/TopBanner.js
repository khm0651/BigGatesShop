import React from 'react'
import styled from 'styled-components'
import TopBar from './TopBar'
import shopLogo from '../../img/shopLogo.png'
import ItemCategory from './ItemCategory'

const TopBanner = () =>{
    return(
        <>
            <div>
                <TopBar />
                <BannerWrapper >
                    <BannerImg src={shopLogo}/>
                </BannerWrapper>
                <ItemCategory />
            </div>
            
        </>
    )
}

const BannerImg = styled.img`
    width : 350px;
    height: 200px;
`;

const BannerWrapper = styled.div`
    width : auto;
    height: fit-content;
    display: flex;
    justify-content:center;
    align-items:center;
    padding-top:25px;
    padding-bottom:25px;
`;

export default TopBanner