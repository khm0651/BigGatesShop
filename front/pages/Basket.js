import React from "react";
import {Button, Menu} from 'antd';
import Link from "next/link";
import Basknull from "../components/Basketcomponents/basknull";
import Baskethave from "../components/Basketcomponents/Baskethave";



export const basketdata =[
    {
        img :[],
        product : "bab",
        number : 1,
        point : 999,
        price : 4000,
        total : 12500,
    }
]

const Basket =()=>{
    return (
        <div style={all}>
            <div style={{paddingBottom :"30px"}}> CHART </div>
            {basketdata.length == 0  ? <Basknull/>: <Baskethave/>}
        </div>
    );
};

const all ={
    paddingLeft: "250px",
    paddingTop: "30px",
}
export default Basket;