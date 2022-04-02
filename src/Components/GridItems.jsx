import { Items, ItemTitle } from "../Styles/Recommendation"
import { useState } from "react"


const GridItems = ({background, recipe}) => {
  
  const [titleStatus, setTitleStatus] = useState(false);
  return (
    <Items onMouseLeave={()=>{setTitleStatus(false)}} onMouseOver={()=>{setTitleStatus(true)}} bg={background}>
      <ItemTitle opacity={titleStatus? 1: 0} translate={titleStatus? 0: -100}>
        {recipe}
      </ItemTitle>
    </Items>
  )
}

export default GridItems
