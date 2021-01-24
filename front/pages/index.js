import React from 'react'
import TGLPick from '../components/IndexComponents/TglPick'
import Carousel from '../components/IndexComponents/Carousel'

const img=[
    {
        src:"hi"
    },
    {
        src:"2"
    },
    {
        src:"3"
    }
]

const Home = () =>{
    return(
        <div>
            <TGLPick />
            <Carousel title={"BEST 20"} img={img}/>

        </div>
    )
}


export default Home