import React from 'react'
import {Menu} from 'antd'
import styled from 'styled-components'

const ItemCategory = () => {
    return(
        <Menu mode='horizontal' style={menuStyle}>
                <Menu.Item key="best" style={bestStyle}>
                    BEST 20
                </Menu.Item>
                <Menu.Item key="new">
                    NEW ARRIVALS
                </Menu.Item>
                <Menu.Item key="glitter">
                    TGL글리터
                </Menu.Item>
                <Menu.Item key="powder">
                    TGL파우더
                </Menu.Item>
                <Menu.Item key="spang">
                    스팽글
                </Menu.Item>
                <Menu.Item key="sticker">
                    스티커
                </Menu.Item>
                <Menu.Item key="event" style={eventStyle}>
                    EVENT
                </Menu.Item>
                <Menu.Item key="notice">
                    NOTICE
                </Menu.Item>
            </Menu>
    )
}

const menuStyle = {
    width:"auto",
    fontSize:"10px",
    lineHeight: "23px",
    paddingLeft:"25px",
    paddingRight:"25px",
    display: "flex",
    justifyContent: "space-evenly"
}

const bestStyle = {
    color:"#f35252",
}

const eventStyle = {
    color:"#a702a7",
}

export default ItemCategory