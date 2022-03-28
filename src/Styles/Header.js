import styled from 'styled-components';

export const MainDiv = styled.div`
    margin-top: 10px;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Container = styled.div`
    width: 1500px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SubContainer = styled.div`
    flex: 1;
    height: 100%;
    background: url(${props => props.background}) no-repeat center;
    background-size: 100%;
    display: flex;
    justify-content: ${props=> props.justify};
`
export const DescriptiveSection = styled.div`
    width: 580px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
`
export const Tagline = styled.h2`
    font-size: 45px;
    word-spacing: 1.09rem;
    color: #4A4A4A;
    font-weight: lighter;
    margin-bottom: 20px;
    
`
export const TagDescription = styled.h3`
    line-height: 25px;
    font-weight: 400;
    font-size: 17px;
    color: #014200;
    word-spacing: .4rem;
    width: 480px;
`
export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 543px;
    height: 50px;

`
export const Textbox = styled.input`
   flex: 1;
   height: 100%;
   font-size: 18px;
   padding: 20px;
   outline-style: none;
`
export const Search = styled.button`
   width: 80px;
   height: 100%;
   background: #81E731;
   border-style: none;
   font-size: 20px;
   transition: all .2s ease;
   :hover{
    transform: scale(1.1);
   }
`