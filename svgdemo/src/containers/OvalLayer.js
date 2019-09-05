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

const animationDuration = 300

const ovalPathSmall = {
    x: 100.0,
    y: 120.0,
    r: 0
}

const ovalPathLarge = {
    x: 100,
    y: 117.5,
    r: 47.5
}

const ovalPathSquishVertical = {
    x: 98,
    y: 120.0,
    r: 45
}

const ovalPathSquishHorizontal = {
    x: 102,
    y: 120.0,
    r: 46

}

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

class OvalLayer extends Component{
    constructor(props) {
      super(props)

        this.animatedValue = new Animated.Value(0)
        this.oval_animated_x = this.animatedValue.interpolate({
             inputRange: [0,1,2,3,4],
             outputRange: [ovalPathSmall.x,ovalPathLarge.x,ovalPathSquishVertical.x,ovalPathSquishHorizontal.x,100]
         })

        this.oval_animated_y = this.animatedValue.interpolate({
             inputRange: [0,1,2,3,4],
             outputRange: [ovalPathSmall.y,ovalPathLarge.y,ovalPathSquishVertical.y,ovalPathSquishHorizontal.y,120]
         })

         this.oval_animated_r = this.animatedValue.interpolate({
             inputRange: [0,1,2,3,4],
             outputRange: [ovalPathSmall.r,ovalPathLarge.r,ovalPathSquishVertical.r,ovalPathSquishHorizontal.r,47.5]
         })
    };

    componentDidMount = () => {
        this.props.onRef(this)
        this.expand()
        this.wobble()
      
    };

    componentWillUnmount() {
        this.props.onRef(undefined)
    }
    
    
    render() {
        return (
            
                <AnimatedCircle
                    cx={this.oval_animated_x}
                    cy={this.oval_animated_y}
                    r={this.oval_animated_r}
                    strokeWidth="0"
                    fill="red"
                />
            
        )
    }

    expand = () => {
        this.expand_animated = Animated.timing(this.animatedValue, {
          duration: 90,
          easing: Easing.linear,
          toValue: 1,
        })
    }

    wobble = () => {
        this.wobbleAnimation1 = Animated.timing(this.animatedValue, {
          duration: animationDuration,
          easing: Easing.linear,
          toValue: 2,
        })

        this.wobbleAnimation2 = Animated.timing(this.animatedValue, {
          duration: animationDuration,
          easing: Easing.linear,
          toValue: 3,
        })

        this.wobbleAnimation3 = Animated.timing(this.animatedValue, {
          duration: animationDuration,
          easing: Easing.linear,
          toValue: 2,
        })

        this.wobbleAnimation4 = Animated.timing(this.animatedValue, {
          duration: animationDuration,
          easing: Easing.linear,
          toValue: 1,
        })

        this.wobbleAnimation5 = Animated.timing(this.animatedValue, {
          duration: animationDuration,
          easing: Easing.linear,
          toValue: 4,
        })
        
    }

    oval_layer_start = () => {
        Animated.sequence([
        this.expand_animated,
        this.wobbleAnimation1,
        this.wobbleAnimation2,
        this.wobbleAnimation3,
        this.wobbleAnimation4,
        this.wobbleAnimation1,
        this.wobbleAnimation2,
        this.wobbleAnimation3,
        this.wobbleAnimation4,
        this.wobbleAnimation5
      ]).start(() => {
          this.props.spinAnimation()
      })
    }


}

export default OvalLayer