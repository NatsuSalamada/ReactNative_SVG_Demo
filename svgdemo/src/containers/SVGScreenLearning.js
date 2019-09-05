import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
  SvgUri
} from 'react-native-svg';

import React,{Component} from 'react';
import { View, StyleSheet } from 'react-native';

class SVGScreenLearning extends Component{

  render() {
    return (
      
      // Usage
      <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
        {/* {this.usage()} */}
        {/* {this.loaded_from_uri()} */}
        {/* {this.svg()} */}
        {this.path_03()}
      </View>


    )
  }

  usage = () => {

    return (

      <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
        ]}
      >
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="2.5"
            fill="green"
          />
          <Rect
            x="15"
            y="15"
            width="70"
            height="70"
            stroke="red"
            strokeWidth="2"
            fill="yellow"
          />
        </Svg>
      </View>

    )

  }

  loaded_from_uri = () => {
    return (
      <SvgUri
        width="50%"
        height="50%"
        uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
      />
    )
  }

  svg = () => {
    return (
      <View>
          {/* <Svg height="100" width="100">
            <Rect x="0" y="0" width="100" height="100" fill="black" />
            <Circle cx="50" cy="50" r="30" fill="yellow" />
            <Circle cx="40" cy="40" r="4" fill="black" />
            <Circle cx="60" cy="40" r="4" fill="black" />
            <Path d="M 40 60 A 10 10 0 0 0 60 60" stroke="black" />
          </Svg> */}
          <Svg
            width="130"
            height="130"
            fill="blue"
            stroke="red"
            // color="green"
            viewBox="-16 -16 544 544"
          >
            <Path
              d="M318.37,85.45L422.53,190.11,158.89,455,54.79,350.38ZM501.56,60.2L455.11,13.53a45.93,45.93,0,0,0-65.11,0L345.51,58.24,449.66,162.9l51.9-52.15A35.8,35.8,0,0,0,501.56,60.2ZM0.29,497.49a11.88,11.88,0,0,0,14.34,14.17l116.06-28.28L26.59,378.72Z"
              strokeWidth="32"
            />
            {/* <Path d="M0,0L512,512" stroke="currentColor" strokeWidth="32" /> */}
          </Svg>
      </View>
    )
  }

  path_01 = () => {
    return (
      <Svg 
        width={300}
        height={300}
        viewBox='0 0 300 300'>

          <Path
            d="M 100 100 L 200 200"
            stroke="red" strokeWidth="10"
          />
          <Path
            d="M 200 100 L 100 200"
            stroke="green" strokeWidth="10"
          />

          <Path
            d="M 150 100 L 150 200"
            stroke="yellow" strokeWidth="10"
          />

          <Path
            d="M 100 150 L 200 150"
            stroke="black" strokeWidth="10"
          />
        
        </Svg>
    )
  }

  path_02 = () => {

    return (
      <Svg 
        width={300}
        height={300}
        viewBox='0 0 300 300'>

          <Path
            d="M 150 100 L 200 200 L 100 200 L 150 100 L 100 200 L 150 250 L 200 200"
            stroke="green" strokeWidth="1"
          />

        </Svg>
    )

  }

  path_03 = () => {
    return (
      <Svg 
        width={300}
        height={300}
        viewBox='0 0 300 300'>

          <Path
            d="M 0 150 L 30 150 C 30 100 70 100 70 150"
            stroke="green" strokeWidth="5" fill="white"
          />

        </Svg>
    )
  }

}

export default SVGScreenLearning