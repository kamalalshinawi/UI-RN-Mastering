import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import FoodLogo from '../assets/FoodLogo'

export default function IntroScreen() {
  return (
    <View>
      {/* <Image source={require("../assets/Logo.png")} /> */}
      <FoodLogo />
    </View>
  )
}

const styles = StyleSheet.create({})

