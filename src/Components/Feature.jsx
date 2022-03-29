import { FeatureBorder, FeatureIcon, FeatureTitle } from "../Styles/Features"

const Feature = ({Icon, Text}) => {
  return (
    <FeatureBorder>
        <FeatureIcon src={Icon}>

        </FeatureIcon>
        <FeatureTitle>
            {Text}
        </FeatureTitle>
    </FeatureBorder>
  )
}

export default Feature
