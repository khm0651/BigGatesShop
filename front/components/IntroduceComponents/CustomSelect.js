import React from 'react'
import styled from 'styled-components'
import {Select} from 'antd'

const CustomSelect = ({index,option,selectCount}) => {
    const onChange = (value,option) => {
        console.log(value,option.props.children)
    }
    return(
        <ItemWrapper>
            <Label>
                > Color{index}
            </Label>
            <SelectWrapper>
                <Select defaultValue="default" onChange={onChange}>
                    <Select.Option value="default">-[필수] 옵션을 선택해주세요</Select.Option>
                    {option.map((v,i)=>{
                        return <Select.Option key={i} value={i}>{v}</Select.Option>
                    })}
                </Select>
            </SelectWrapper>
        </ItemWrapper>
    )
}

const ItemWrapper = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
    margin-bottom:15px;
`

const Label = styled.div`
    width:30%;
    font-size:12px;
`

const SelectWrapper = styled.div`
    width:80%;
    display:flex;
    justify-content:center;
    align-items:center;
`

export default CustomSelect