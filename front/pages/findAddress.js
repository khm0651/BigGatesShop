import React from 'react';
import { Button, Form, Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
// import DaumPostcode from 'react-daum-postcode';

const FindAddr = () => {

    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "50px",
        zIndex: "100",
        padding: "7px"
    }

    return (
        <DaumPostcode
            onComplete={handleComplete}
            style={postCodeStyle}
            height={700}
        />
    )
}


const FindAddressNumber = () => {
    return<>
        <Form style={{marginLeft:200,marginRight:200}}>
            <div>주소 검색 페이지</div>
            <br/>
            <div>
                <label htmlFor="address-si_name">주소검색</label>
                <br />
                <Input name = "address-si_name" placeholder = "도로명주소+건물번호/건물명 혹은 지번주소+번지수/건물명 입력해주세요." style={{width:600, marginRight:10}} />
                <Button type="primary" icon={<SearchOutlined />}>
                    Search

                </Button>
            </div>
        </Form>

    </>
}

export default FindAddressNumber;