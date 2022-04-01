import styled from 'styled-components';
import { keyframes } from 'styled-components';
import background1 from './HeaderBackground/1.png'
import background2 from './HeaderBackground/2.png'
import background3 from './HeaderBackground/3.png'
import background4 from './HeaderBackground/4.png'
import background5 from './HeaderBackground/5.png'
import background6 from './HeaderBackground/6.png'

export const MainDiv = styled.div`
    margin-top: 80px;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1200px){
    height: 490px;
    }
    @media (max-width: 700px) {
    height: auto;
    text-align: center;
    }
`
export const Container = styled.div`
    max-width: 1500px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1200px){
    max-width: 1000px;
    }
    @media (max-width: 700px){
    flex-direction:column-reverse;
    height: auto;
    width: 100%;
    }
`
export const SubContainer = styled.div`
    width: 700px;
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: ${props=> props.justify};
    align-items: center;
    
    @media (max-width: 1200px){
    max-width: 600px;
    }

    @media (max-width: 700px){
    justify-content: center;
    min-height: 250px;
    width: 100%;
    }
`
export const Background = styled.div`
    width: 100%;
    height: 100%;
    animation: ${props=>props.animation} 40s infinite;
    -moz-animation: ${props=>props.animation} 40s infinite;
    -webkit-animation: ${props=>props.animation} 40s infinite;
    @media (max-width: 700px) {
        width: 400px;
        max-width: 100%;
        max-height: 100%;
        height: 300px;
    }
`
export const DescriptiveSection = styled.div`
    width: 580px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    @media (max-width: 1200px){
        width: 400px
    }
    @media (max-width: 700px){
    width: 100%;
    align-items: center;
    }
`
export const Tagline = styled.h2`
    font-size: 45px;
    word-spacing: 1.09rem;
    color: #4A4A4A;
    font-weight: normal;
    margin-bottom: 20px;

    @media (max-width: 1200px){
    font-size: 30px;
    }
    
`
export const TagDescription = styled.h3`
    line-height: 25px;
    font-weight: 400;
    font-size: 17px;
    color: #014200;
    word-spacing: .4rem;
    width: 400px;
    font-family: Helvetica;

    @media (max-width: 1200px){
    font-size: 15px;
    width: 350px;
    }
    @media (max-width: 700px){
    width: 100%;
    max-width: 300px;
    }
`
export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 543px;
    height: 50px;

    @media (max-width: 1200px){
    width: 100%;
    }

    @media (max-width: 700px){
    width: 100%;
    max-width: 400px;
    }
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

export const ChangeBackground = keyframes`
0%{background: url('${background1}') no-repeat;background-size: 100%;}
4%{background: url('${background1}')  no-repeat;background-size: 100%;}
8%{background: url('${background3}')  no-repeat;background-size: 100%;}
20%{background: url('${background3}')  no-repeat;background-size: 100%;}
24%{background: url('${background2}')  no-repeat;background-size: 100%;}
36%{background: url('${background2}')  no-repeat;background-size: 100%;}
40%{background: url('${background4}')  no-repeat;background-size: 100%;}
52%{background: url('${background4}')  no-repeat;background-size: 100%;}
56%{background: url('${background5}')  no-repeat;background-size: 100%;}
68%{background: url('${background5}')  no-repeat;background-size: 100%;}
72%{background: url('${background6}')  no-repeat;background-size: 100%;}
86%{background: url('${background6}')  no-repeat;background-size: 100%;}
90%{background: url('${background1}')  no-repeat;background-size: 100%;}
100%{background: url('${background1}')  no-repeat;background-size: 100%;};

`