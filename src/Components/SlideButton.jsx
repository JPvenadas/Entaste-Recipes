import { Btn } from "../Styles/Recommendation"

const SlideButton = ({right, left, icon}) => {
  return (
   <Btn right={right} left={left}>{icon}</Btn>
  )
}

export default SlideButton
