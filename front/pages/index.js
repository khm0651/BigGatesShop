import React from 'react'
import Link from "next/link";
import {Button} from "antd";

import TGLPick from '../components/IndexComponents/TglPick'
import Carousel from '../components/IndexComponents/Carousel'

const TGLimg=[
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
        src:"https://lh3.googleusercontent.com/proxy/FZR0VRNwi_BE05IdmF2e3yJ8wK_6Eg40NY6ecofLA1YHN3d5asq2y1OFP3d4LTbq5TVDNy7Pw3iqQ19W3951LQmmTwwWrusOPr8jmSfi5vNGsSHcvWg_z5I5uksUnAj4JFjpaI0DlussOMEPQXIxd3sMqJ0u9TrJqACG0pGuIKdxKsyM-pwDPLAizKjs61AN-mg_Kpz-t1b52Of5H1LeuwTrkQWD-PC1h6tEeSwsEHCCv2VuFg_44jLpYbfcznQCgewvbeUFbumFtkK6Q0eraIqRUlQEcTPafTGl_BKAMzPGYelJ2ruoJNZorDOS2Ll_u_VD8Drl2ELDoSBV9Ps0fuvkY667kfT02EW3OeYqcbDyMhABRtoRpQ",
    },
]

const BESTimg=[
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
            src:"https://lh3.googleusercontent.com/proxy/FZR0VRNwi_BE05IdmF2e3yJ8wK_6Eg40NY6ecofLA1YHN3d5asq2y1OFP3d4LTbq5TVDNy7Pw3iqQ19W3951LQmmTwwWrusOPr8jmSfi5vNGsSHcvWg_z5I5uksUnAj4JFjpaI0DlussOMEPQXIxd3sMqJ0u9TrJqACG0pGuIKdxKsyM-pwDPLAizKjs61AN-mg_Kpz-t1b52Of5H1LeuwTrkQWD-PC1h6tEeSwsEHCCv2VuFg_44jLpYbfcznQCgewvbeUFbumFtkK6Q0eraIqRUlQEcTPafTGl_BKAMzPGYelJ2ruoJNZorDOS2Ll_u_VD8Drl2ELDoSBV9Ps0fuvkY667kfT02EW3OeYqcbDyMhABRtoRpQ",
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
            src:"https://lh3.googleusercontent.com/proxy/FZR0VRNwi_BE05IdmF2e3yJ8wK_6Eg40NY6ecofLA1YHN3d5asq2y1OFP3d4LTbq5TVDNy7Pw3iqQ19W3951LQmmTwwWrusOPr8jmSfi5vNGsSHcvWg_z5I5uksUnAj4JFjpaI0DlussOMEPQXIxd3sMqJ0u9TrJqACG0pGuIKdxKsyM-pwDPLAizKjs61AN-mg_Kpz-t1b52Of5H1LeuwTrkQWD-PC1h6tEeSwsEHCCv2VuFg_44jLpYbfcznQCgewvbeUFbumFtkK6Q0eraIqRUlQEcTPafTGl_BKAMzPGYelJ2ruoJNZorDOS2Ll_u_VD8Drl2ELDoSBV9Ps0fuvkY667kfT02EW3OeYqcbDyMhABRtoRpQ",
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
            src:"https://lh3.googleusercontent.com/proxy/FZR0VRNwi_BE05IdmF2e3yJ8wK_6Eg40NY6ecofLA1YHN3d5asq2y1OFP3d4LTbq5TVDNy7Pw3iqQ19W3951LQmmTwwWrusOPr8jmSfi5vNGsSHcvWg_z5I5uksUnAj4JFjpaI0DlussOMEPQXIxd3sMqJ0u9TrJqACG0pGuIKdxKsyM-pwDPLAizKjs61AN-mg_Kpz-t1b52Of5H1LeuwTrkQWD-PC1h6tEeSwsEHCCv2VuFg_44jLpYbfcznQCgewvbeUFbumFtkK6Q0eraIqRUlQEcTPafTGl_BKAMzPGYelJ2ruoJNZorDOS2Ll_u_VD8Drl2ELDoSBV9Ps0fuvkY667kfT02EW3OeYqcbDyMhABRtoRpQ",
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
            src:"https://lh3.googleusercontent.com/proxy/FZR0VRNwi_BE05IdmF2e3yJ8wK_6Eg40NY6ecofLA1YHN3d5asq2y1OFP3d4LTbq5TVDNy7Pw3iqQ19W3951LQmmTwwWrusOPr8jmSfi5vNGsSHcvWg_z5I5uksUnAj4JFjpaI0DlussOMEPQXIxd3sMqJ0u9TrJqACG0pGuIKdxKsyM-pwDPLAizKjs61AN-mg_Kpz-t1b52Of5H1LeuwTrkQWD-PC1h6tEeSwsEHCCv2VuFg_44jLpYbfcznQCgewvbeUFbumFtkK6Q0eraIqRUlQEcTPafTGl_BKAMzPGYelJ2ruoJNZorDOS2Ll_u_VD8Drl2ELDoSBV9Ps0fuvkY667kfT02EW3OeYqcbDyMhABRtoRpQ",
        }
    ]
]


const Home = () =>{
    return(
        <div>
            <TGLPick img={TGLimg}/>
            <Carousel title={"BEST 20"} img={BESTimg}/>
            <Carousel title={"SEASONAL ITEM"} img={BESTimg}/>
        </div>
    )
}

export default Home