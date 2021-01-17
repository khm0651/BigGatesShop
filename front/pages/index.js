import React from 'react'
import Link from "next/link";
import {Button} from "antd";

const Home = () =>{
    return(
        <div>
            <Link href='/Mypage'><a><Button> 마이 프로필 </Button></a></Link>

        </div>
    )
}

export default Home