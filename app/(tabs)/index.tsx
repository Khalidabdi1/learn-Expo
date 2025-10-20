import {View ,Text,StyleSheet,ImageBackground} from "react-native"

import icecoffee from "@/assets/images/coffe.png"

 export default function app(){
  return(
    <View style={styles.container}>
      <ImageBackground source={icecoffee} resizeMode="cover" style={styles.img}>
      <Text style={styles.text}>Coffee</Text>
      </ImageBackground>
    </View>
  )
}





let styles =StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column"
  },
  img:{
    width:"100%",
    height:"100%",
    flex:1,
    resizeMode:"cover",
    justifyContent:"center"
  },
  text:{
    color:"white",
    fontSize:42,
    fontWeight:"bold",
    textAlign:"center",
    backgroundColor:"rgba(0,0,0,0.5)",
  }
})