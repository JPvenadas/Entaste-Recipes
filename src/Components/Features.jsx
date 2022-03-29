import { MainDiv, Container, FeatureSection, Title } from "../Styles/Features"
import Feature from "./Feature"
import Icon1 from './../Styles/FeatureIcons/1.png'
import Icon2 from './../Styles/FeatureIcons/2.png'
import Icon3 from './../Styles/FeatureIcons/3.png'
import Icon4 from './../Styles/FeatureIcons/4.png'
import Icon5 from './../Styles/FeatureIcons/5.png'


const Features = () => {
  return (
      <MainDiv>
          <Container>
              <Title>
                  Our Recipes include
              </Title>
              <FeatureSection>
                <Feature Icon={Icon1} Area='P1' Text='Ingredients'/>
                <Feature Icon={Icon2}  Area='P2' Text='Techniques'/>
                <Feature Icon={Icon3}  Area='P3' Text='Diets'/>
                <Feature Icon={Icon4}  Area='P4' Text='Cautions'/>
                <Feature Icon={Icon5}  Area='P5' Text='Nutritions'/>
              </FeatureSection>
          </Container>
      </MainDiv>
  )
}

export default Features
