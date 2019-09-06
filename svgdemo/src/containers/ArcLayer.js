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

const arcPathPre = 'M 100 147.5 L 100 147.5'

const arcPathComplete = 'M 100 147.5 L 100 58.5'


const AnimatedArc = Animated.createAnimatedComponent(Path)
class ArcLayer extends Component{

    constructor(props) {
      super(props)

      this.animatedValue = new Animated.Value(0)

      this.arc_animated = this.animatedValue.interpolate({
             inputRange: [0,1],
             outputRange: [arcPathPre,arcPathComplete]
         })
    
      this.state = {
         
      };
    };
    

    componentDidMount = () => {
        this.props.onRef(this)
        
      
    };

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    render() {
        return (
            <AnimatedArc
                d={this.arc_animated}
                stroke="blue" strokeWidth="100" fill="blue"
            />
        )
    }

    anime = () => {
        Animated.sequence([
            Animated.timing(this.animatedValue, {
                duration: 2000,
                easing: Easing.linear,
                toValue: 1,
            }),
        ]).start()
    }

}

export default ArcLayer