import { Btn } from "../Styles/Recommendation"


const SlideButton = ({display,right, left, icon, click}) => {
  return (
   <Btn display={display} onClick={click} right={right} left={left}>{icon}</Btn>
  )
}

export default SlideButton
