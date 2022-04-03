import styled from 'styled-components'
import {FaGithub, FaLinkedin, FaFacebook, FaGoogle} from 'react-icons/fa'
export const MainDiv = styled.div`
    width: 100%;
    background: #83B138;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Helvetica;
    
`
export const Container = styled.div`
    display: flex;
    width: 900px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const About = styled.div`
    display: grid;
    grid-template-columns: 3fr 5fr 5fr;
    width: 100%;
    height: 100px;
    
`
export const Title = styled.h2`
    font-size: 1rem;
    color: white;
    margin-bottom: 10px;
`
export const Links = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
`
export const LinkItem = styled.li`
    display: block;
    color: white;
`
export const AboutContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`
export const Source = styled.div`
    display: flex;
`
export const DevContainer = styled.div`
    display: flex;
    flex-direction: column;
   
`
export const Dev = styled.div`
     color: white;
     margin: 0 10px 20px 0;
`
export const DevLinks = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    border-top: 2px solid white;
    padding: 10px
`
export const DevLink = styled.li`
    color: white;
`

