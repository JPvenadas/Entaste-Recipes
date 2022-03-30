import { MainDiv, Container, Title, Grid } from "../Styles/Recommendation"
import GridItems from "./GridItems"

const Recommendation = () => {
  return (
    <MainDiv>
      <Container>
        <Title>Recipes you may like</Title>
        <Grid>
          <GridItems/>
          <GridItems/>
          <GridItems/>
          <GridItems/>
          <GridItems/>
          <GridItems/>
        </Grid>
      </Container>
    </MainDiv>
  )
}

export default Recommendation
