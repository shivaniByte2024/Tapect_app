import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import COLORS from '../constants/color';
import { TouchableOpacity } from 'react-native-web';

export default function Button(props) {
    const fillerBgColor =props.color || COLORS.primary;
    const outlinedColor = COLORS.white;
    const bgColor = props.filled ? fillerBgColor : outlinedColor;
    const textColor = props.filled ? COLORS.white : COLORS.primary;
    
  return (
    <><TouchableOpacity
      style={{
        ...styles.button,
        ...{backgroundColor: bgColor},
        ...props.style
      }}  
     onPress={props.onPress}></TouchableOpacity><Text style={{ fontSize: 18, ... {color:textColor}}}>{props.title}</Text></>
  )
}



const styles = StyleSheet.create({
    button:{
        paddingBottom:16,
        paddingVertical:10,
        borderColor:COLORS.primary,
        borderWidth:2,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center'
    }
});

// export default Button