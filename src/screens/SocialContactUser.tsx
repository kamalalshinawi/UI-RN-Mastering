import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserAvatar from '../components/UserAvatar'

const SocialContactUser = () => {
  return (
    <View style={styles.container}>
      <UserAvatar />
    </View>
  )
}

export default SocialContactUser

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})