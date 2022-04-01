import styled from 'styled-components'

export const MainDiv = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Container = styled.div`
    width: 1150px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-direction: column;
    @media (max-width: 1200px) {
        text-align: center;        
    }
    
`
export const Title = styled.div`
    width: 100%;
    font-family: 'Cookie';
    font-size: 3rem;
    @media (max-width: 1200px) {
    font-size: 2rem;
    }
`
export const FeatureSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    @media (max-width: 700px) {
        display: grid;
        grid-template-areas:   'P1 P1 P2 P2 P3 P3'
                               'P1 P1 P2 P2 P3 P3'
                               'P8 P4 P4 P5 P5 P9';
    }
`
export const FeatureBorder = styled.div`
    width: 146px;
    height: 110px;
    background: #FFFFFF;
    border-radius: 25px;
    border: 1px solid #56DB41;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    transition: .2s ease;
    @media (max-width: 700px) {
       grid-area: ${props => props.area};
       width: 120px;
       height: 90px;
    }
    :hover{
        border: 3px solid #56DB41;
    }
`
export const FeatureTitle = styled.h3`
    font-weight: normal;
    font-size: .9rem;
    @media (max-width: 700px) {
       font-size: .7rem;
    }
`
export const FeatureIcon = styled.img`
    width: 70px;
    height: 48px;
    @media (max-width: 700px) {
        width: 60px;
        height: 40px;
    }
`