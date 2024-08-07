import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Fallback = () => {
  return (
    <View style={{alignItems:'center'}}>
      <Image source={require("../../assets/todo.png")} style={{height:200 , width:200}}/>
      <Text style={{margin:20}}>Start Adding Your Task</Text>
    </View>
  )
}

export default Fallback

const styles = StyleSheet.create({})