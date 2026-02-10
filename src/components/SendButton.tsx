import { StyleSheet, Text, View } from 'react-native'
import {s,vs} from "react-native-size-matters"
import React from 'react'
import { SentIcon } from '../assets/SentIcon'

const SendButton = () => {
  return (
    <View style={styles.container}>
      <SentIcon />
    </View>
  )
}

export default SendButton

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#1077AF",
        height: vs(46),
        width: s(46),
        borderRadius: s(40),
        alignItems: "center",
        justifyContent: "center",

    }
})