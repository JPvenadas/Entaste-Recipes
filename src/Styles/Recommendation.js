import styled from "styled-components";

export const MainDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
    margin-top: 80px;
`
export const Container = styled.div`
    width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    @media (max-width: 700px) {
        gap: 10px;
    }
`
export const Title = styled.div`
    width: 100%;
    font-family: 'Cookie';
    font-size: 3rem;
    text-align: center;
    @media (max-width: 1200px) {
        font-size: 2rem;
    }
`
export const GridContainer = styled.div`
    width: 1000px;
    max-width: 100vw;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Grid = styled.div`
    display: grid;
    grid: repeat(2, 1fr)/ repeat(3, 1fr);
    gap: 20px;
    width: 100%;
    transition: .3s ease;
    z-index: 1;
    
    @media (max-width: 1200px){
        gap: 13px;
        width: 80%;
        min-width: 760px;
    }
    @media (max-width: 700px) {
        display: flex;
        flex-direction: row;
        width: auto;
        flex-shrink: 0;
        gap: 0;
        transform: translateX(${props=> props.translate}vw);
    }
   
`
export const Items = styled.div`
    width: 320px;
    height: 220px;
    display: flex;
    justify-content: center;
    background: url('${props => props.bg}') no-repeat;
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
    background-position: center;
    transition: .3s ease-in-out;
    :hover{
        background: linear-gradient(rgba(0, 0, 0, 0.417), rgba(0, 0, 0, 0.4)), url('${props => props.bg}') no-repeat;
        background-size: 105% 105%;
        background-position: center;
       
    }
    @media (max-width: 1200px) {
        flex-shrink: 0;
        width: 100%;
        height: 200px;
    }
    @media (max-width: 700px) {
        width: 100vw;
        height: 300px;
        background-size: 70vw 250px;
        :hover{
        background: url('${props => props.bg}') no-repeat;
        background-position: center;
        background-size: 70vw 250px;}
        
    }
    @media (max-width: 500px) {
        background-size: 70vw 200px;
        :hover{
        background: url('${props => props.bg}') no-repeat;
        background-position: center;
        background-size: 70vw 200px;
    }
    }
   
`
export const Btn = styled.button`
     position: absolute;
     width: 30px;
     height: 30px;
     border-radius: 50%;
     background: white;
     border-style: none;
     z-index: 2;
     display: none;
     box-shadow: 1px 1px 2px gray;
     right: ${props => props.right}px;
     left: ${props => props.left}px;
     top: 50%;
    @media (max-width: 700px) {
        display: ${props => props.display};
        top: 140px;  
         
    }
`
export const ItemTitle = styled.div`
    position: absolute;
    padding: 10px;
    bottom: 0;
    font-family: helvetica;
    width: 100%;
    color: white;
    background: rgb(0,0,0,0.8);
    transition: .3s ease;
    transform: translateX(${props=>props.translate}%);
    opacity: ${props=>props.opacity};
    @media (max-width: 700px) {
        transform: translateX(0);
        opacity: 1;
        position: block;
        width: 70vw;
        text-align: center;
    }

`
   
