import { MainDiv, Container, GridContainer, Title, Grid } from "../Styles/Recommendation"
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
import { useState, useEffect } from "react"

const Recommendation = () => {
  
  const [slide, changeslide] = useState(250);
  const [leftshow, setLeftshow] = useState(true)
  const [rightshow, setRightshow] = useState(true)
  const onClickRight = ()=>{
  changeslide(slide - 100);
  }
  const onClickLeft = ()=>{
    changeslide(slide + 100);
  }
  const undisplaybutton = ()=>{
    slide === 250? setLeftshow(false): setLeftshow(true);
    slide === -250? setRightshow(false): setRightshow(true);
  }
  useEffect(undisplaybutton,[slide])
  return (
    <MainDiv>
      <Container>
        <Title>Recipes you may like</Title>
        <GridContainer>
        <SlideButton 
         display = {rightshow? 'block': 'none'}
         right={5} click={()=>(onClickRight())} icon={<FaChevronRight />} />
        <SlideButton
        display = {leftshow? 'block': 'none'}
         left={5} click={onClickLeft} icon={<FaChevronLeft />} />
          <Grid translate={slide}>
            <GridItems recipe='Pork Adobo' background={Adobo} />
            <GridItems recipe='Fried Rice' background={FriedRice} />
            <GridItems recipe='Macaroni and Cheese' background={MacChesse} />
            <GridItems recipe='Roman Pizza' background={Pizza} />
            <GridItems recipe='Sushi' background={Sushi} />
            <GridItems recipe='Vegetable Salad' background={Vege} />
          </Grid>
        </GridContainer>
      </Container>
    </MainDiv>
  )
}

export default Recommendation
