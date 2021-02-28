import React, { useState } from 'react'
import styled from 'styled-components'

const ReviewPageNavigation = ({currentPage,perPageNum,totalReviewNum,setCurrentPage}) => {
    const pageList = []
    for(var i =1; i<= Math.ceil(totalReviewNum / perPageNum); i++){
        pageList.push(i)
    }
    
    const currentPageList = (pageList) =>{
        
        var startIndex =  5 * Math.floor(currentPage / 5)
        if(currentPage % 5 == 0 ) startIndex = startIndex - 5
        var lastIndex = startIndex + 5
        var temp = pageList.slice(startIndex,lastIndex)
        return temp
    }

    var tempPageList = currentPageList(pageList)

    const changePage = (num)=>{
        setCurrentPage(num)
        window.scrollTo(0,document.getElementsByClassName("ReviewTopBar")[0].offsetTop-100)
    }

    const moveToPrev = () =>{
        if( currentPage > 1 ) changePage(currentPage-1)
    }

    const moveToNext= () =>{
        if( currentPage < pageList.length ) changePage(currentPage+1)
    }

    const moveToPrevPageList = () =>{
        var startIndex =  5 * Math.floor(currentPage / 5)
        if(currentPage % 5 == 0 ) startIndex = startIndex - 5
        if(startIndex<5) return
        console.log(startIndex)
        changePage(startIndex)
    }

    const moveToNextPageList = () =>{
        var startIndex =  5 * Math.floor(currentPage / 5)
        if(currentPage % 5 == 0 ) startIndex = startIndex - 5
        var lastIndex = startIndex + 5
        if(lastIndex > pageList.length) return
        console.log(lastIndex)
        changePage(lastIndex+1)
    }

    return(
        <ReviewPageNavigationWrapper>
            <PageNavigationBtn onClick={moveToPrevPageList}>
                &#60;
            </PageNavigationBtn>
            <PageNavigationBtn onClick={moveToPrev}>
                &#60;
            </PageNavigationBtn>
            {
                tempPageList.map((num)=>{
                    if(num==currentPage) return <PageNavigationBtn onClick={()=>changePage(num)} black bold>{num}</PageNavigationBtn>
                    else return <PageNavigationBtn onClick={()=>changePage(num)}>{num}</PageNavigationBtn>
                })
            }
            <PageNavigationBtn onClick={moveToNext}>
                &#62;
            </PageNavigationBtn>      
            <PageNavigationBtn onClick={moveToNextPageList}>
                &#62;
            </PageNavigationBtn>      
        </ReviewPageNavigationWrapper>
    )
}

const ReviewPageNavigationWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top:20px;
`

const PageNavigationBtn = styled.div`
    margin:10px;
    cursor: pointer;
    color:${props=> props.darkgray ? "black" : null};
    font-weight:${props=> props.bold ? "bold" : null};

`

export default ReviewPageNavigation