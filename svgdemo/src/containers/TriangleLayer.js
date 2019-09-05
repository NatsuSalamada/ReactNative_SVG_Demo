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
import { View, StyleSheet,Animated, Easing } from 'react-native';

const trianglePathHidden = 'M 85 147.5 L 85 147.5 L 85 147.5 Z'

const trianglePathSmall = 'M 85 147.5 L 100 92.5 L 115 147.5 Z'

const trianglePathLeftExtension = 'M 50 147.5 L 100 92.5 L 115 147.5 Z'

const trianglePathRightExtension = 'M 50 147.5 L 100 92.5 L 150 147.5 Z'

const trianglePathTopExtension = 'M 50 147.5 L 100 60.5 L 150 147.5 Z'

const AnimatedTriangle = Animated.createAnimatedComponent(Path)

class TriangleLayer extends Component{
    constructor(props) {
      super(props)
    
        this.animatedValue = new Animated.Value(0)

        this.triangle_animated = this.animatedValue.interpolate({
             inputRange: [0,1,2,3,4],
             outputRange: [trianglePathHidden,trianglePathSmall,trianglePathLeftExtension,trianglePathRightExtension,trianglePathTopExtension]
         })
    };

    componentDidMount = () => {
        this.props.onRef(this)
        
      
    };

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    render() {
        return (
            <AnimatedTriangle

                d={this.triangle_animated}
                stroke="green" strokeWidth="0" fill="green"
            />
        )
    }

    anime = () => {

        Animated.sequence([
            Animated.timing(this.animatedValue, {
                duration: 1000,
                easing: Easing.linear,
                toValue: 1,
            }),
            Animated.timing(this.animatedValue, {
                duration: 500,
                easing: Easing.linear,
                toValue: 2,
            }),
            Animated.timing(this.animatedValue, {
                duration: 500,
                easing: Easing.linear,
                toValue: 3,
            }),Animated.timing(this.animatedValue, {
                duration: 500,
                easing: Easing.linear,
                toValue: 4,
            })
        ]).start()
        
    }
}

export default TriangleLayer