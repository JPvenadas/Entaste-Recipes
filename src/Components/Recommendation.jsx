import { MainDiv, Container, Title, Grid } from "../Styles/Recommendation"
import GridItems from "./GridItems"
import Adobo from './../Styles/Rec-Items/Adobo.png'
import FriedRice from './../Styles/Rec-Items/FriedRice.png'
import MacChesse from './../Styles/Rec-Items/Mac&Cheese.png'
import Pizza from './../Styles/Rec-Items/Pizza.png'
import Sushi from './../Styles/Rec-Items/Sushi.png'
import Vege from './../Styles/Rec-Items/VegSalad.png'
import SlideButton from "./SlideButton"
import { FaChevronLeft } from "react-icons/fa" 
import { FaChevronRight } from "react-icons/fa" 

const Recommendation = () => {
  return (
    <MainDiv>
      <Container>
        <Title>Recipes you may like</Title>
        <Grid>
          <SlideButton right={0} icon={<FaChevronRight/>} />
          <SlideButton left={0} icon={<FaChevronLeft/>} />
          <GridItems background={Adobo} />
          <GridItems background={FriedRice} />
          <GridItems background={MacChesse} />
          <GridItems background={Pizza} />
          <GridItems background={Sushi} />
          <GridItems background={Vege} />
        </Grid>
      </Container>
    </MainDiv>
  )
}

export default Recommendation
