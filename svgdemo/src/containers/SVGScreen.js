import Svg, {
  Circle,
  Ellipse,
  G,
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
import { View, StyleSheet,Easing,TouchableOpacity,Text,Animated } from 'react-native';

import OvalLayer from "./OvalLayer";
import TriangleLayer from "./TriangleLayer";
import RectangleLayer from './RectangleLayer';

const AnimatedView = Animated.createAnimatedComponent(View)

class SVGScreen extends Component{

  constructor(props) {
    super(props)
  
    this.spinValue = new Animated.Value(0)
    this.spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg']
    })
    this.state = {
       is_hide_oval: false
    };
  };
  

  render() {
    return (
      <View  style = {[{flex: 1, justifyContent:'center',alignItems:'center'}]}>
        
        <AnimatedView style = {{width:'50%',height:'50%',transform: [{rotate: this.spin}] }}>
          <Svg
                height="100%" width="100%" viewBox="0 0 200 200"
            >

            
            
              <TriangleLayer onRef={ref => (this.triangle_layer = ref)}/>
              { !this.state.is_hide_oval ? <OvalLayer onRef={ref => (this.oval_layer = ref)} spinAnimation = {() => {
                this.spinAnimation()
              }}/> : null}
              <RectangleLayer onRef={ref => (this.rectangle_layer = ref)}/>
            

        </Svg>
        </AnimatedView>
        
        
        <TouchableOpacity style = {{marginTop: 100, width: 200, height: 50, justifyContent:'center', alignItems:'center', backgroundColor:'pink'}}
        onPress = { () => {
          this.oval_layer.oval_layer_start()
          this.triangle_layer.anime()
        } } >
            <Text style = {{fontSize:20}} >Start Loading</Text>
         </TouchableOpacity>
      </View>
    )
  }

  spinAnimation = () => {
    this.setState({
      is_hide_oval:true
    })
    Animated.timing(
        this.spinValue,
      {
        toValue: 1,
        duration: 500,
        easing: Easing.linear
      }
    ).start(() => {
      this.rectangle_layer.anime()
    })
  }

}

export default SVGScreen