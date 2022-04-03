import { MainDiv,Title,Links, Dev, DevContainer,LinkItem, DevLinks, DevLink, AboutContainer, Container, About } from "../Styles/Footer"
import {FaGithub, FaLinkedin, FaFacebook, FaGoogle} from 'react-icons/fa'

const Footer = () => {
   const icons = {
       fill: 'white',
       fontSize: 30
   }
  return (
   <MainDiv>
          <Container>
              <About>
                  <AboutContainer>
                      <Title>Quick Links</Title>
                      <Links>
                          <LinkItem>Home</LinkItem>
                          <LinkItem>Recipe</LinkItem>
                          <LinkItem>About</LinkItem>
                      </Links>
                  </AboutContainer>
                  <AboutContainer>
                        <Title>API Provider</Title>
                        <Links>
                          <LinkItem>Rapid API</LinkItem>
                          <LinkItem>Recipe Search and Diet</LinkItem>
                      </Links>
                  </AboutContainer>
                  <AboutContainer>
                        <Title>Developer</Title>
                        <DevContainer>
                            <Dev>Created by Jayphe Venadas</Dev>
                            <DevLinks>
                                
                                <DevLink><FaGithub style={icons}/></DevLink>
                                <DevLink><FaLinkedin style={icons}/></DevLink>
                                <DevLink><FaFacebook style={icons}/></DevLink>
                                <DevLink><FaGoogle style={icons}/></DevLink>
                            </DevLinks>
                        </DevContainer>
                  </AboutContainer>
              </About>
          </Container>
   </MainDiv>
  )
}

export default Footer
