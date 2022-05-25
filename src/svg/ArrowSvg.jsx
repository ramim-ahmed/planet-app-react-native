import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15 13-3 3m0 0-3-3m3 3V8m0 13a9 9 0 1 1 0-18 9 9 0 0 1 0 18z"
    />
  </Svg>
)

export default SvgComponent
