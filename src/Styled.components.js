import styled from 'styled-components';

export const Navlinks = styled.ul`
   font-size: 20px;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 40px;
   transition: .5s ease;

   @media (max-width: 500px){
    position: absolute;
    top: 65px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 100vw;
    transform: ${(props)=>props.translate};
   }
`;