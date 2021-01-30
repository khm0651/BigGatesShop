import React ,{useState,useEffect,useCallback}from 'react'
import styled from 'styled-components'
import ProductImg from './ProductImg'
import leftArrow from '../../img/leftArrow.png'
import rightArrow from '../../img/rightArrow.png'


const Carousel = ({title,img}) => {

    var [index,setIndex] = useState(0)
    var currentShowImg = img[index].map( (v,i) => {
        return (<ProductImg key={i} src={v.src}/>)
    })

    const moveLeft = useCallback(() =>{
        if(index == 0) setIndex(4)
        else setIndex(index - 1)
        currentShowImg = img[index].map( (v,i) => {
            return (<ProductImg key={i} src={v.src}/>)
        })
    },[index])


    const moveRight = useCallback(() =>{
        if(index == 4) setIndex(0)
        else setIndex(index + 1)
        currentShowImg =  img[index].map( (v,i) => {
            return (<ProductImg key={i} src={v.src}/>)
        })
    },[index])

    const moveIndex = useCallback((idx)=>{
        setIndex(idx)
        currentShowImg =  img[idx].map( (v,i) => {
            return (<ProductImg key={i} src={v.src}/>)
        })
    },[index])

    useEffect(()=>{
        const timer = setInterval( ()=>{
            currentShowImg = img[index].map( (v,i) => {
                return (<ProductImg key={i} src={v.src}/>)
            })
            if(index == 4){
                setIndex(0)
            }else{
                setIndex(index+1)
            }
        },3000)
        return () => clearInterval(timer)
        
    },[index])

    return(
        <Wrapper>
            <Title>
                {title}
            </Title>

            <ContentWrapper>
                <LeftArrow onClick={moveLeft} src = {leftArrow}/>
                <ImgWrapper>
                    {
                        currentShowImg
                    }
                </ImgWrapper>
                <RightArrow onClick={moveRight} src = {rightArrow}/>
            </ContentWrapper>

            <CurrentButtonWrapper>

                { index == 0 ? <CurrentButton id={`${title.replaceAll(" ","")}CurrentButton0`} onClick={()=>moveIndex(0)} background = "#ECECEC"/>
                : <CurrentButton id={`${title.replaceAll(" ","")}CurrentButton0`} onClick={()=>moveIndex(0)}/>}
                

                { index == 1 ? <CurrentButton id={`${title.replaceAll(" ","")}CurrentButton1`} onClick={()=>moveIndex(1)} background = "#ECECEC"/>
                : <CurrentButton id={`${title.replaceAll(" ","")}CurrentButton1`} onClick={()=>moveIndex(1)}/>}

                { index == 2 ? <CurrentButton id={`${title.replaceAll(" ","")}CurrentButton2`} onClick={()=>moveIndex(2)} background = "#ECECEC"/>
                : <CurrentButton id={`${title.replaceAll(" ","")}CurrentButton2`} onClick={()=>moveIndex(2)}/>}

                { index == 3 ? <CurrentButton id={`${title.replaceAll(" ","")}CurrentButton3`} onClick={()=>moveIndex(3)} background = "#ECECEC"/>
                : <CurrentButton id={`${title.replaceAll(" ","")}CurrentButton3`} onClick={()=>moveIndex(3)}/>}

                { index == 4 ? <CurrentButton id={`${title.replaceAll(" ","")}CurrentButton4`} onClick={()=>moveIndex(4)} background = "#ECECEC"/>
                : <CurrentButton id={`${title.replaceAll(" ","")}CurrentButton4`} onClick={()=>moveIndex(4)}/>}

            </CurrentButtonWrapper>
        </Wrapper>
    )
}

const LeftArrow = styled.img`
    width:20px;
    height: 20px;
    margin-right:10px;
    cursor: pointer;
`

const RightArrow = styled.img`
    width:20px;
    height: 20px;
    margin-left:10px;
    cursor: pointer;
`

const Wrapper = styled.div`
    display : flex;
    flex : 1;
    justify-content:center;
    align-items:center;
    margin-top:25px;
    flex-direction : column;
`

const Title = styled.div`
    font-size : 15px;
    color : darkgray;
    margin-bottom:10px;
`

const ImgWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`

const ContentWrapper = styled.div`
    display:flex;
    flex-direction:row;
    width: -webkit-fill-available;
    align-items:center;
`

const CurrentButtonWrapper = styled.div`
    display:flex;
    margin-top:10px;
`

const CurrentButton = styled.div`
    width:8px;
    height:8px;
    background-color : ${props => props.background || 'darkgray'};
    border-radius: 30px;
    margin-right:7px;
    cursor: pointer;
`

export default Carousel