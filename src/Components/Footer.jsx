import { MainDiv,Title,Links,LinkItem, AboutContainer, Container, About } from "../Styles/Footer"
const Footer = () => {
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
                  </AboutContainer>
                  <AboutContainer>
                        <Title>API Developer</Title>
                  </AboutContainer>
              </About>
          </Container>
   </MainDiv>
  )
}

export default Footer
