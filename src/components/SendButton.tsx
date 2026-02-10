import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {s,vs} from "react-native-size-matters"
import React from 'react'
import { SentIcon } from '../assets/SentIcon'

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <SentIcon />
    </TouchableOpacity>
  )
}

export default SendButton

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#1077AF",
        height: vs(46),
        width: s(46),
        borderRadius: s(35),
        alignItems: "center",
        justifyContent: "center",

    }
})