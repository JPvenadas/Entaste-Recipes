import styled from "styled-components";

export const MainDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
`
export const Container = styled.div`
    width: 1100px;
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
`
export const Items = styled.div`
    width: 100%;
    height: 250px;
    background: black;
    
`