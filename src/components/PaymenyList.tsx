import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import {MethodIcon} from "../assets/Icons"
import PayMethodCard from "./PayMethodCard"
import {s,vs} from "react-native-size-matters"
const PayMentData = [
    {title:"Cash",icon:<MethodIcon />},
    {title:"Visa",icon:<MethodIcon />},
    {title:"MasterCard",icon:<MethodIcon />},
    {title:"ATM",icon:<MethodIcon />},
]

const PaymenyList = () => {
  return (
    <View>
      <FlatList
      data={PayMentData}
      keyExtractor={item => item.title}
      renderItem={({item}) => <PayMethodCard title={item.title} icon={item.icon} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{gap:s(16),paddingHorizontal: s(16)}}
      />
    </View>
  )
}

export default PaymenyList

const styles = StyleSheet.create({})