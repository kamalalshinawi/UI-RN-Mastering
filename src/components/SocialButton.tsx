import { StyleSheet, Text, View } from 'react-native'
import {s,vs} from 'react-native-size-matters'
import React from 'react'

const SocialButton = () => {
  return (
    <View style={styles.container}>
      
    </View>
  )
}

export default SocialButton

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        height: vs(46),
        width: s(46),
        borderRadius: s(35),
        borderWidth: 1,
        borderColor: "#E4E6E8",
        alignItems:"center",
        justifyContent:"center",

    }
})