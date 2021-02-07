import React from 'react'
import Head from 'next/head'
import TopBanner from '../components/bannerComponents/TopBanner'
import BottomBanner from '../components/bottomBannerComponents/BottomBanner'
import ScrollBar from "../components/ScrollBarComponents/ScrollBar";

const BigGatesShop = ({ Component }) => {
    return (
        <>
            <Head>
                <title>NodeBirds</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
            </Head>
            <ScrollBar />
            <TopBanner />
            <div style={appLayoutWrapper}>
                <Component />
            </div>
            <BottomBanner />

   
        </>
    )
}

const appLayoutWrapper = {
    paddingLeft : "30px",
    paddingRight : "30px",
}

export default BigGatesShop