
import React from "react";
import ContentLoader from "react-content-loader"

type Tloader = {
  props: any;
}

const Loader: React.FC<Tloader> = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={300}
    height={396}
    viewBox="0 0 300 396"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="296" rx="10" ry="10" width="287" height="32" /> 
    <rect x="0" y="500" rx="10" ry="10" width="290" height="82" /> 
    <rect x="0" y="438" rx="10" ry="10" width="95" height="30" /> 
    <rect x="133" y="438" rx="25" ry="25" width="148" height="46" /> 
    <rect x="1" y="13" rx="0" ry="0" width="290" height="260" /> 
    <rect x="-1" y="348" rx="10" ry="10" width="81" height="32" /> 
    <rect x="138" y="347" rx="25" ry="25" width="153" height="46" />
  </ContentLoader>
)

export default Loader