import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={300}
    height={500}
    viewBox="0 0 300 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="142" cy="128" r="125" /> 
    <rect x="7" y="276" rx="10" ry="10" width="287" height="32" /> 
    <rect x="0" y="332" rx="10" ry="10" width="290" height="82" /> 
    <rect x="0" y="438" rx="10" ry="10" width="95" height="30" /> 
    <rect x="133" y="438" rx="25" ry="25" width="148" height="46" />
  </ContentLoader>
)

export default Skeleton