import { FeatureBorder, FeatureIcon, FeatureTitle } from "../Styles/Features"

const Feature = ({Icon, Text, Area}) => {
  return (
    <FeatureBorder area={Area}>
        <FeatureIcon src={Icon}>

        </FeatureIcon>
        <FeatureTitle>
            {Text}
        </FeatureTitle>
    </FeatureBorder>
  )
}

export default Feature
