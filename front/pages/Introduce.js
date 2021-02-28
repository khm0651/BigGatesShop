import React, {useState,useEffect,useCallback} from 'react'
import {useRouter} from 'next/router'
import {Divider,Form,Select,Button} from 'antd'
import styled from 'styled-components'
import CustomSelect from '../components/IntroduceComponents/CustomSelect'
import product1 from '../img/product1.jpg'
import product2 from '../img/product2.jpg'
import product3 from '../img/product3.jpg'
import product4 from '../img/product4.jpg'
import product5 from '../img/product5.jpg'
import product6 from '../img/product6.jpg'
import product7 from '../img/product7.jpg'
import IntroduceDetailReview from '../components/IntroduceComponents/IntroduceDetailReview'

const TGLimg=[
    {
        id : 1,
        title :"여리여리 악새서리",
        src:"https://i0.wp.com/filmsnippet.buppagistar.com/wp-content/uploads/2014/06/%EC%9D%B4%EC%9B%83%EC%A7%91%ED%86%A0%ED%86%A0%EB%A1%9C3.jpg?fit=1200%2C675",
        price: 9000,
        option:[
            '빨강',
            '노랑',
            '검정',
        ],
        detail:{
            imgs:[
                product1,
                product2,
                product3,
                product4,
                product5,
                product6,
                product7,
            ]
        },
        reviews:[
            {
                no:1,
                title:"제목",
                writer:'hamy',
                thumbnail:product1,
                 content:"hihihihihihihi",
            },
            {
                no:2,
                title:"제목",
                writer:'hamy',
                 content:"hihihihihihihi",
                
            },
            {
                no:3,
                title:"제목",
                writer:'hamy',
                thumbnail:product1,
                 content:"hihihihihihihi",
            },
            {
                no:4,
                title:"제목",
                writer:'hamy',
                thumbnail:product1,
                 content:"hihihihihihihi",
            },
            {
                no:5,
                title:"제목",
                writer:'hamy',
                thumbnail:product1,
                 content:"hihihihihihihi",
            },
            {
                no:6,
                title:"제목",
                writer:'hamy',
                thumbnail:product1,
                 content:"hihihihihihihi",
            },
            {
                no:7,
                title:"제목",
                writer:'hamy',
                thumbnail:product1,
                 content:"hihihihihihihi",
            },
            {
                no:8,
                title:"제목",
                writer:'hamy',
                thumbnail:product1,
                 content:"hihihihihihihi",
            },
            {
                no:9,
                title:"제목",
                writer:'hamy',
                thumbnail:product1,
                 content:"hihihihihihihi",
            },
            {
                no:10,
                title:"제목",
                writer:'hamy',
                thumbnail:product1,
            },
            {
                no:11,
                title:"제목",
                writer:'hamy',
                thumbnail:product1,
            },
            {
                no:12,
                title:"제목",
                writer:'hamy',
                thumbnail:product1,
            },
            {
                no:13,
                title:"제목",
                writer:'hamy',
                thumbnail:product1,
            },
            {
                no:14,
                title:"제목",
                writer:'hamy',
                thumbnail:product1,
                content:"hihihihihihihi",
            },
            {
                no:15,
                title:"제목",
                writer:'hamy',
                thumbnail:product1,
            },
            {
                no:16,
                title:"제목",
                writer:'hamy',
                thumbnail:product1,
            },
            {
                no:17,
                title:"제목",
                writer:'hamy',
                thumbnail:product1,
                content:"hihihihihihihihi",
            },
            {
                no:18,
                title:"제목",
                writer:'hamy',
                content:"hihihihihihihihi",
                
            },
            {
                no:19,
                title:"제목",
                writer:'hamy',
                thumbnail:product1,
                content:"hihihihihihihihi",
            },
            {
                no:20,
                title:"제목",
                writer:'hamy',
                thumbnail:product1,
                content:"hihihihihihihihi",
            },

        ]

    },
    {
        id:2,
        title : "누가봐도 멋진 악새서리",
        src:"https://t1.daumcdn.net/cfile/tistory/25257E4753D84EE013",
        price: 9000,
    },
    {
        id:3,
        title : " 하이",
        src:"https://i.pinimg.com/originals/a0/ee/9e/a0ee9ec98b9e671ac86a31ac6153d40a.jpg",
        price: 9000,
    },
    {
        id:4,
        title: "나도모름",
        src:"https://lh3.googleusercontent.com/proxy/FZR0VRNwi_BE05IdmF2e3yJ8wK_6Eg40NY6ecofLA1YHN3d5asq2y1OFP3d4LTbq5TVDNy7Pw3iqQ19W3951LQmmTwwWrusOPr8jmSfi5vNGsSHcvWg_z5I5uksUnAj4JFjpaI0DlussOMEPQXIxd3sMqJ0u9TrJqACG0pGuIKdxKsyM-pwDPLAizKjs61AN-mg_Kpz-t1b52Of5H1LeuwTrkQWD-PC1h6tEeSwsEHCCv2VuFg_44jLpYbfcznQCgewvbeUFbumFtkK6Q0eraIqRUlQEcTPafTGl_BKAMzPGYelJ2ruoJNZorDOS2Ll_u_VD8Drl2ELDoSBV9Ps0fuvkY667kfT02EW3OeYqcbDyMhABRtoRpQ",
        price: 9000,
    },
]

const Introduce = () => {
    const router = useRouter()
    const {id} = router.query
    const {Option} = Select
    const [selectCounter,setSelectCounter ]= useState(0)
    const [count,setCount] = useState(0)
    const [option,setOption] = useState("")
    const [optionList,setOptionList] = useState([])
    const range = Array.from(Array(11).keys())
    const [isShowInfo,setIsShowInfo] = useState(false)
    const [item,setItem] = useState(TGLimg.find((element)=>{
        if(element.id == id){
            return true
        }
    }))

    useEffect(()=>{
        setSelectCounter(document.getElementsByClassName("select").length)
        setOptionList(Array(document.getElementsByClassName("select").length).fill(false))
    },[])

    useEffect(()=>{
        checkList()
    },[optionList])
        
    const selectChange = useCallback((v,o,id) => {
        
        var list = [...optionList]
        if(v != "default"){
            list[id] = true
        }else{
            list[id] = false
        }
        if(id == 1) setCount(v)
        else setOption(v)
        setOptionList(list)

    },[optionList])

    const checkList = () => {
        var c = 0
        for(var i =0; i<optionList.length; i++){
            if(optionList[i] == true) c++
        }
        if(c == selectCounter && c != 0) setIsShowInfo(true)
        else setIsShowInfo(false)
    }

    return (
        <>
        <IntroduceWrapper>
            <IntroduceImageWrapper>
                <IntroduceImage src={item.src}/>

                {/* <IntroduceImageMoreWrapper>
                    <IntroduceImageMore />
                    <IntroduceImageMore />
                    <IntroduceImageMore />
                    <IntroduceImageMore />
                    <IntroduceImageMore />
                </IntroduceImageMoreWrapper> */}
                
            </IntroduceImageWrapper>

            <IntroduceOptionWrapper>
                <Form style={{width:"100%"}}>
                    <Title>
                        {item.title}
                    </Title>
                    {/* <Divider style={dividerStyle}/> */}
                    <ItemWrapper>
                        <Label>
                            판매가
                        </Label>
                        <Info>
                            {item.price}
                        </Info>

                    </ItemWrapper>
                    {/* <Divider style={dividerStyle}/> */}
                    
                        {/* {
                            item.option.map((option,i)=>{
                                return <CustomSelect key={i} index={i+1} option={option} selectCount={selectState}/>
                            })
                        } */}

                    <ItemWrapper>
                        <Label>
                            옵션
                        </Label>
                        <SelectWrapper>
                            <Select defaultValue="default" className="select" onChange={(v,o)=>selectChange(v,o,0)}>
                                <Select.Option value="default">-[필수] 옵션을 선택해주세요</Select.Option>
                                {item.option.map((v,i)=>{
                                    return <Select.Option key={i} value={v}>{v}</Select.Option>
                                })}
                            </Select>
                        </SelectWrapper>
                    </ItemWrapper>

                    <ItemWrapper>
                        <Label>
                            수량
                        </Label>
                        <SelectWrapper>
                            <Select defaultValue="default" className="select" onChange={(v,o)=>selectChange(v,o,1)}>
                                {range.map((v,i)=>{
                                    if(i == 0 ) return <Select.Option key={i} value="default">{v}</Select.Option>
                                    else return <Select.Option key={i} value={v}>{v}</Select.Option>
                                })}
                            </Select>
                        </SelectWrapper>
                    </ItemWrapper>

                    <Divider style={dividerStyle}/>
                          
                    {
                        isShowInfo ?
                        <>
                            <CheckInfoWrapper>
                                <CheckInfoTitle>
                                    {item.title}
                                </CheckInfoTitle>
                                <CheckInfoOption>
                                    옵션 : {option}
                                </CheckInfoOption>
                                <CheckInfoCount>
                                    개수 : {count}개
                                </CheckInfoCount>
                                <CheckInfoTotalPrice>
                                    TOTAL : {item.price * count}원
                                </CheckInfoTotalPrice>
                                
                            </CheckInfoWrapper>

                            <Divider style={dividerStyle}/>
                            
                            <ButtonWrapper>
                                <Button style={buyStyle} block>BUY</Button>
                                <Button block>CART</Button>
                            </ButtonWrapper>
                        </>
                        :
                        <> 
                            <Notice>최소주문수량 1개 이상</Notice>
                            <Divider style={dividerStyle}/>
                        </>

                    }
                


                </Form>
            </IntroduceOptionWrapper>
            
        </IntroduceWrapper>

        <IntroduceDetailReview detail={TGLimg[0].detail} review={TGLimg[0].reviews }/>
        </>
    )
}

const dividerStyle = {
    margin : "10px 0",
    width: "100%",
}

const buyStyle = {
    marginRight : "20px",
}

const ButtonWrapper = styled.div`
    display:flex;
    padding: 20px 0px;
`

const CheckInfoWrapper = styled.div`
    padding : 0px 20px;
`

const CheckInfoTitle = styled.div`
    font-size:15px;
    font-weight:bold;
    margin-bottom:5px;
`

const CheckInfoOption = styled.div`
    font-size:12px;
    color:darkgray;
    font-weight:bold;
    margin-bottom:5px;
`

const CheckInfoCount = styled.div`
    font-size:12px;
    color:darkgray;
    font-weight:bold;
    margin-bottom:15px;
`

const CheckInfoTotalPrice = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    font-weight: bold;
    color: darkgray;
`

const IntroduceWrapper = styled.div`
    display:flex;
    padding: 50px 150px; 
    justify-content:center;
    
`

const IntroduceImageWrapper = styled.div`
    width:400px;
    height: 500px;
    margin-right:20px;
`

const IntroduceImage = styled.img`
    width:100%;
    height: 100%;
`

const IntroduceImageMoreWrapper = styled.div`
    width:100%;
    height: 20%;
    background-color:green;
    display:flex;
    justify-content:center;
    align-content:center;
`

const IntroduceImageMore = styled.img`
    flex : 1;
    border : 1px solid #ECECEC;
    background-color : yellow;
`

const IntroduceOptionWrapper = styled.div`
    width:400px;
    height: 500px;
    display:flex;
    flex-direction:column;
    padding : 0px 30px;
`
const Title = styled.div`
    font-size:15px;
    font-weight:bold;
    color:darkgray;
    margin-bottom:15px;
`

const ItemWrapper = styled.div`
    display:flex;
    width:100%;
    margin-bottom:15px;
    align-items:center;
`

const Label = styled.div`
    width:20%;
    font-size:12px;
`

const Notice = styled.div`
    font-size:12px;
    color:darkgray;
`
const Info = styled.div`
    width:70%;
`

const SelectWrapper = styled.div`
    width:80%;
    display:flex;
    justify-content:center;
    align-items:center;
`

export default Introduce