import styled from 'styled-components';

export const Navlinks = styled.ul`
   font-size: 20px;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 40px;
   transition: .5s ease;
   background-color: white;

   @media (max-width: 700px){
    position: absolute;
    top: 65px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    transform: ${(props)=>props.translate};
   }
`;