import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Elevatedcards() {
  return (
    <View>
          <View >
      <Text style={[styles.whiteText,StyleSheet.create({white:{color:"white"}}).white]}>Elevatedcards</Text>
    </View>
    <ScrollView horizontal>
        <View style={styles.box}>
            <Text style={styles.whiteText}>tyoyo</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.whiteText}>tap</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.whiteText}>tap</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.whiteText}>tap</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.whiteText}>tap</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.whiteText}>tap</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.whiteText}>tap</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.whiteText}>tap</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.whiteText}>tap</Text>
        </View>


    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    whiteText:{
        color: '#000000',
        fontWeight:'bold',
        fontSize:25,
        margin:5
        
    },
    container:{
      display:'flex',
      flexDirection:'row',
      padding:5
    },
    box:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      height:100,
      width:100,
      margin:5,
      borderRadius:8,
      backgroundColor:'white',
      
    },
    text:{
      textAlign:'center'
    }
})