import React from 'react'
import Link from "next/link";
import {Button} from "antd";

import TGLPick from '../components/IndexComponents/TglPick'
import Carousel from '../components/IndexComponents/Carousel'
import BestReview from '../components/IndexComponents/BestReview'

const TGLimg=[
    {
        id : 1,
        src:"https://i0.wp.com/filmsnippet.buppagistar.com/wp-content/uploads/2014/06/%EC%9D%B4%EC%9B%83%EC%A7%91%ED%86%A0%ED%86%A0%EB%A1%9C3.jpg?fit=1200%2C675",
    },
    {
        id:2,
        src:"https://t1.daumcdn.net/cfile/tistory/25257E4753D84EE013"
    },
    {
        id:3,
        src:"https://i.pinimg.com/originals/a0/ee/9e/a0ee9ec98b9e671ac86a31ac6153d40a.jpg"
    },
    {
        id:4,
        src:"https://lh3.googleusercontent.com/proxy/FZR0VRNwi_BE05IdmF2e3yJ8wK_6Eg40NY6ecofLA1YHN3d5asq2y1OFP3d4LTbq5TVDNy7Pw3iqQ19W3951LQmmTwwWrusOPr8jmSfi5vNGsSHcvWg_z5I5uksUnAj4JFjpaI0DlussOMEPQXIxd3sMqJ0u9TrJqACG0pGuIKdxKsyM-pwDPLAizKjs61AN-mg_Kpz-t1b52Of5H1LeuwTrkQWD-PC1h6tEeSwsEHCCv2VuFg_44jLpYbfcznQCgewvbeUFbumFtkK6Q0eraIqRUlQEcTPafTGl_BKAMzPGYelJ2ruoJNZorDOS2Ll_u_VD8Drl2ELDoSBV9Ps0fuvkY667kfT02EW3OeYqcbDyMhABRtoRpQ",
    },
]

const BESTimg=[
    [
        {
            src:"https://i0.wp.com/filmsnippet.buppagistar.com/wp-content/uploads/2014/06/%EC%9D%B4%EC%9B%83%EC%A7%91%ED%86%A0%ED%86%A0%EB%A1%9C3.jpg?fit=1200%2C675",
        },
        {
            src:"https://t1.daumcdn.net/cfile/tistory/25257E4753D84EE013"
        },
        {
            src:"https://i.pinimg.com/originals/a0/ee/9e/a0ee9ec98b9e671ac86a31ac6153d40a.jpg"
        },
        {
            src:"https://lh3.googleusercontent.com/proxy/FZR0VRNwi_BE05IdmF2e3yJ8wK_6Eg40NY6ecofLA1YHN3d5asq2y1OFP3d4LTbq5TVDNy7Pw3iqQ19W3951LQmmTwwWrusOPr8jmSfi5vNGsSHcvWg_z5I5uksUnAj4JFjpaI0DlussOMEPQXIxd3sMqJ0u9TrJqACG0pGuIKdxKsyM-pwDPLAizKjs61AN-mg_Kpz-t1b52Of5H1LeuwTrkQWD-PC1h6tEeSwsEHCCv2VuFg_44jLpYbfcznQCgewvbeUFbumFtkK6Q0eraIqRUlQEcTPafTGl_BKAMzPGYelJ2ruoJNZorDOS2Ll_u_VD8Drl2ELDoSBV9Ps0fuvkY667kfT02EW3OeYqcbDyMhABRtoRpQ",
        }
    ],
    [
        {
            src:"https://i0.wp.com/filmsnippet.buppagistar.com/wp-content/uploads/2014/06/%EC%9D%B4%EC%9B%83%EC%A7%91%ED%86%A0%ED%86%A0%EB%A1%9C3.jpg?fit=1200%2C675",
        },
        {
            src:"https://t1.daumcdn.net/cfile/tistory/25257E4753D84EE013"
        },
        {
            src:"https://i.pinimg.com/originals/a0/ee/9e/a0ee9ec98b9e671ac86a31ac6153d40a.jpg"
        },
        {
            src:"https://img.lovepik.com/photo/50064/1430.jpg_wh860.jpg",
        }
    ],
    [
        {
            src:"https://img.lovepik.com/photo/50064/1430.jpg_wh860.jpg",
        },
        {
            src:"https://t1.daumcdn.net/cfile/tistory/25257E4753D84EE013"
        },
        {
            src:"https://i.pinimg.com/originals/a0/ee/9e/a0ee9ec98b9e671ac86a31ac6153d40a.jpg"
        },
        {
            src:"https://i0.wp.com/filmsnippet.buppagistar.com/wp-content/uploads/2014/06/%EC%9D%B4%EC%9B%83%EC%A7%91%ED%86%A0%ED%86%A0%EB%A1%9C3.jpg?fit=1200%2C675",
        }
    ],
    [
        {
            src:"https://lh3.googleusercontent.com/proxy/FZR0VRNwi_BE05IdmF2e3yJ8wK_6Eg40NY6ecofLA1YHN3d5asq2y1OFP3d4LTbq5TVDNy7Pw3iqQ19W3951LQmmTwwWrusOPr8jmSfi5vNGsSHcvWg_z5I5uksUnAj4JFjpaI0DlussOMEPQXIxd3sMqJ0u9TrJqACG0pGuIKdxKsyM-pwDPLAizKjs61AN-mg_Kpz-t1b52Of5H1LeuwTrkQWD-PC1h6tEeSwsEHCCv2VuFg_44jLpYbfcznQCgewvbeUFbumFtkK6Q0eraIqRUlQEcTPafTGl_BKAMzPGYelJ2ruoJNZorDOS2Ll_u_VD8Drl2ELDoSBV9Ps0fuvkY667kfT02EW3OeYqcbDyMhABRtoRpQ",
        },
        {
            src:"https://t1.daumcdn.net/cfile/tistory/25257E4753D84EE013"
        },
        {
            src:"https://i.pinimg.com/originals/a0/ee/9e/a0ee9ec98b9e671ac86a31ac6153d40a.jpg"
        },
        {
            src:"https://i0.wp.com/filmsnippet.buppagistar.com/wp-content/uploads/2014/06/%EC%9D%B4%EC%9B%83%EC%A7%91%ED%86%A0%ED%86%A0%EB%A1%9C3.jpg?fit=1200%2C675",
        }
    ],
    [
        {
            src:"https://i0.wp.com/filmsnippet.buppagistar.com/wp-content/uploads/2014/06/%EC%9D%B4%EC%9B%83%EC%A7%91%ED%86%A0%ED%86%A0%EB%A1%9C3.jpg?fit=1200%2C675",
        },
        {
            src:"https://t1.daumcdn.net/cfile/tistory/25257E4753D84EE013"
        },
        {
            src:"https://i.pinimg.com/originals/a0/ee/9e/a0ee9ec98b9e671ac86a31ac6153d40a.jpg"
        },
        {
            src:"https://lh3.googleusercontent.com/proxy/FZR0VRNwi_BE05IdmF2e3yJ8wK_6Eg40NY6ecofLA1YHN3d5asq2y1OFP3d4LTbq5TVDNy7Pw3iqQ19W3951LQmmTwwWrusOPr8jmSfi5vNGsSHcvWg_z5I5uksUnAj4JFjpaI0DlussOMEPQXIxd3sMqJ0u9TrJqACG0pGuIKdxKsyM-pwDPLAizKjs61AN-mg_Kpz-t1b52Of5H1LeuwTrkQWD-PC1h6tEeSwsEHCCv2VuFg_44jLpYbfcznQCgewvbeUFbumFtkK6Q0eraIqRUlQEcTPafTGl_BKAMzPGYelJ2ruoJNZorDOS2Ll_u_VD8Drl2ELDoSBV9Ps0fuvkY667kfT02EW3OeYqcbDyMhABRtoRpQ",
        }
    ]
]

const bestReview = [
    {
        img : "https://i0.wp.com/filmsnippet.buppagistar.com/wp-content/uploads/2014/06/%EC%9D%B4%EC%9B%83%EC%A7%91%ED%86%A0%ED%86%A0%EB%A1%9C3.jpg?fit=1200%2C675",
        id : "rhkrgkals",
        content : "가나다라마바사아자차카타파하",
    },
    {
        img : "https://i0.wp.com/filmsnippet.buppagistar.com/wp-content/uploads/2014/06/%EC%9D%B4%EC%9B%83%EC%A7%91%ED%86%A0%ED%86%A0%EB%A1%9C3.jpg?fit=1200%2C675",
        id : "곽하민",
        content : "가나다라마바사아자차카타파하",
    },
    {
        img : "https://i0.wp.com/filmsnippet.buppagistar.com/wp-content/uploads/2014/06/%EC%9D%B4%EC%9B%83%EC%A7%91%ED%86%A0%ED%86%A0%EB%A1%9C3.jpg?fit=1200%2C675",
        id : "dlxogus",
        content : "가나다라마바사아자차카타파하",
    },
    {
        img : "https://i0.wp.com/filmsnippet.buppagistar.com/wp-content/uploads/2014/06/%EC%9D%B4%EC%9B%83%EC%A7%91%ED%86%A0%ED%86%A0%EB%A1%9C3.jpg?fit=1200%2C675",
        id : "이태현",
        content : "가나다라마바사아자차카타파하",
    },
    {
        img : "https://i0.wp.com/filmsnippet.buppagistar.com/wp-content/uploads/2014/06/%EC%9D%B4%EC%9B%83%EC%A7%91%ED%86%A0%ED%86%A0%EB%A1%9C3.jpg?fit=1200%2C675",
        id : "dudrbgud",
        content : "가나다라마바사아자차카타파하",
    },
    {
        img : "https://i0.wp.com/filmsnippet.buppagistar.com/wp-content/uploads/2014/06/%EC%9D%B4%EC%9B%83%EC%A7%91%ED%86%A0%ED%86%A0%EB%A1%9C3.jpg?fit=1200%2C675",
        id : "영규형",
        content : "가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하",
    },
]


const Home = () =>{
    return(
        <div>
            <TGLPick img={TGLimg}/>
            <Carousel title={"BEST 20"} img={BESTimg}/>
            <Carousel title={"SEASONAL ITEM"} img={BESTimg}/>
            <BestReview data = {bestReview}/>
        </div>
    )
}

export default Home