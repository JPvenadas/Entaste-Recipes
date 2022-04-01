import styled from "styled-components";

export const MainDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
`
export const Container = styled.div`
    width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
`
export const Title = styled.div`
    width: 100%;
    font-family: 'Cookie';
    font-size: 3rem;
    text-align: center;
`
export const Grid = styled.div`
    display: grid;
    grid: repeat(2, 1fr)/ repeat(3, 1fr);
    gap: 20px;
    width: 100%;
    position: relative;
    @media (max-width: 1200px){
        gap: 6px;
    }
    @media (max-width: 700px) {
        display: flex;
        flex-direction: row;
        overflow: hidden;
    }
`
export const Items = styled.div`
    width: 100%;
    height: 220px;
    background: url('${props => props.bg}') no-repeat;
    background-size: 100%;
    @media (max-width: 700px) {
        flex-shrink: 0;
        max-width: 70%;
        height: 300px;
        margin: 0 15%;
        background-position: center;
    }
`
export const Btn = styled.button`
     position: absolute;
     width: 50px;
     height: 50px;
     border-radius: 50%;
     background: white;
     border-style: none;
     display: none;
     box-shadow: 1px 1px 2px gray;
     right: ${props => props.right};
     left: ${props => props.left};
     top: 50%;
    @media (max-width: 700px) {
        display: inline;
        top: 140px;  
    }
`
   
