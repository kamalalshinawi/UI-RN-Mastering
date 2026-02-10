import { StyleSheet, Text, View } from 'react-native'
import SocialButton from './SocialButton'
import SendButton from './SendButton'
import React from 'react'
import {s,vs} from "react-native-size-matters"

const SocialSection = () => {
  return (
    <View style={styles.container}>
      <SocialButton />
      <Text style={styles.text}>What's app</Text>
      <SendButton />
    </View>
  )
}

export default SocialSection

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: vs(15),
        borderBottomWidth: 1,
        borderColor: "#E4E6E8",

    },
    text:{
        color:"#8083A3",
        marginStart: s(15),
        flex:1,
    }
})