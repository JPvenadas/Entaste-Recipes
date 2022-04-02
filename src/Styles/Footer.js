import styled from 'styled-components'

export const MainDiv = styled.div`
    width: 100%;
    background: #83B138;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const Container = styled.div`
    display: flex;
    width: 1000px;
    height: 250px;
    display: flex;
    flex-direction: column;
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
