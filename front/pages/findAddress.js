import React from 'react';
import Head from "next/head";
import {Form, Input} from "antd";

const FindAddressNumber = () => {
    return<>
        <Head>
            <title>NodeBird</title>
            <link rel ="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            <script src ="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
        </Head>

        <Form style={{margin:10}}>
            <div>주소 검색 페이지</div>잇
            <br/>
            <div>
                <label htmlFor="address-si_name">주소검색</label>
                <br />
                <Input name = "address-si_name" />
            </div>
        </Form>

        </>
}

export default FindAddressNumber;