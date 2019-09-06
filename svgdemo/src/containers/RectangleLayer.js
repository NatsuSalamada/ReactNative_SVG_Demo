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

const rectangle_bottom_idle = 'M 48 147.5 L 48 147.5'

const rectangle_bottom_move = 'M 48 147.5 L 152 147.5'

const rectangle_left_idle = 'M 150 149.5 L 150 149.5'

const rectangle_left_move = 'M 150 149.5 L 150 58.5'

const rectangle_top_idle = 'M 152 60.5 L 152 60.5'

const rectangle_top_move = 'M 152 60.5 L 48 60.5'

const rectangle_right_idle = 'M 50 58.5 L 50 58.5'

const rectangle_right_move = 'M 50 58.5 L 50 148.5'

const AnimatedRectangle = Animated.createAnimatedComponent(Path)
class RectangleLayer extends Component{
    constructor(props) {
      super(props)
    
        this.animatedValue_bottom = new Animated.Value(0)

        this.animatedValue_left = new Animated.Value(0)

        this.animatedValue_right = new Animated.Value(0)

        this.animatedValue_top = new Animated.Value(0)

        this.triangle_animated_bottom = this.animatedValue_bottom.interpolate({
             inputRange: [0,1],
             outputRange: [rectangle_bottom_idle,rectangle_bottom_move]
         })

         this.triangle_animated_left = this.animatedValue_left.interpolate({
             inputRange: [0,1],
             outputRange: [rectangle_left_idle,rectangle_left_move]
         })

         this.triangle_animated_top = this.animatedValue_top.interpolate({
             inputRange: [0,1],
             outputRange: [rectangle_top_idle,rectangle_top_move]
         })

         this.triangle_animated_right = this.animatedValue_right.interpolate({
             inputRange: [0,1],
             outputRange: [rectangle_right_idle,rectangle_right_move]
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
            <G style = {{width:'100%',height:'100%'}}>
                <AnimatedRectangle

                    d={this.triangle_animated_bottom}
                    stroke="blue" strokeWidth="5" fill="transparent"
                />
                <AnimatedRectangle

                    d={this.triangle_animated_left}
                    stroke="blue" strokeWidth="5" fill="transparent"
                />
                <AnimatedRectangle

                    d={this.triangle_animated_top}
                    stroke="blue" strokeWidth="5" fill="transparent"
                />
                <AnimatedRectangle

                    d={this.triangle_animated_right}
                    stroke="blue" strokeWidth="5" fill="transparent"
                />
            </G>
        )
    }
    
    anime = () => {
        
        Animated.sequence([
            Animated.timing(this.animatedValue_bottom, {
                duration: 200,
                easing: Easing.linear,
                toValue: 1,
            }),
            Animated.timing(this.animatedValue_left, {
                duration: 200,
                easing: Easing.linear,
                toValue: 1,
            }),
            Animated.timing(this.animatedValue_top, {
                duration: 200,
                easing: Easing.linear,
                toValue: 1,
            }),
            Animated.timing(this.animatedValue_right, {
                duration: 200,
                easing: Easing.linear,
                toValue: 1,
            })
        ]).start(() => {
            this.props.arcAnimation()
        })
        
    }
}
export default RectangleLayer