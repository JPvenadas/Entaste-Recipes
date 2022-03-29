import { MainDiv, Container,Background, ChangeBackground, SubContainer,Textbox, Tagline, TagDescription, DescriptiveSection, SearchContainer, Search } from "../Styles/Header"
import Backgroundd from '../Styles/HeaderBackground/4.png';
import {FaSearch} from "react-icons/fa";
const Header = () => {
  return (
    <MainDiv>
      <Container>
        <SubContainer justify='flex-end'>
          <DescriptiveSection>
            <Tagline>
                Choose the <span style={{color:'#46e017'}}>Best Food </span><br />
                For your taste
            </Tagline>
                <TagDescription>
                Search  for over 2 million Recipes  that you can  defintely do in the comfort your homes.
                </TagDescription>
                <TagDescription>
                We can connect you with the best recipes available for their unique food preferences.
                </TagDescription>
                <SearchContainer>
                  <Textbox type='text' placeholder='Search any Dish or Food'></Textbox>
                  <Search>
                    <FaSearch style={{color: 'white'}}/>
                  </Search>
                </SearchContainer>
          </DescriptiveSection>
        </SubContainer>
        <SubContainer justify='center'>
          <Background animation={ChangeBackground}></Background>
        </SubContainer>
      </Container>
    </MainDiv>
  )
}

export default Header
