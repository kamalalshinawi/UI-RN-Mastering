import { StyleSheet, Text, View } from 'react-native'

import SendButton from './SendButton'
import React,{FC} from 'react'
import {s,vs} from "react-native-size-matters"

interface SocialProps{
    title:string,
    icon: React.ReactNode,
}

const SocialSection: FC<SocialProps> = ({title,icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containericon}>
        {icon}
     </View>
      <Text style={styles.text}>{title}</Text>
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
    },
    containericon:{
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