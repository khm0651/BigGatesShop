import React from 'react'
import styled from 'styled-components'
import TopBar from './TopBar'
import shopLogo from '../../img/shopLogo.png'
import ItemCategory from './ItemCategory'
import Link from "next/link";

const TopBanner = () =>{
    return(
        <>
            <div>
                <TopBar />
                <BannerWrapper >
                    <Link href="/"><a><BannerImg src={shopLogo}/></a></Link>
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