import { useState } from "react";
import { Pressable } from "react-native";
import { Image,Text,View,StyleSheet } from "react-native";

import Dice1 from './assets/dice1.png'
import Dice2 from './assets/dice2.png'
import Dice3 from './assets/dice3.png'
import Dice4 from './assets/dice4.png'
import Dice6 from './assets/dice6.png'
import Dice5 from './assets/dice5.png'
const App=()=>{

const [DiceImg1,setDiceimg1]=useState(Dice1)
const [DiceImg2,setDiceimg2]=useState(Dice1)
const onReset=()=>{
  setDiceimg1(Dice1)
  setDiceimg2(Dice1)
}

const onPressHandler=()=>{
  const randomNumber1= Math.floor(Math.random()*6)+1
  const randomNumber2= Math.floor(Math.random()*6)+1
  
  /*const r="Dice"+randomNumber1
  const r2="Dice"+randomNumber2
  setDiceimg1(r2)
  setDiceimg2(r)*/
     switch(randomNumber1)
     {
      case 1:
        setDiceimg1(Dice1)
        break;
      
      case 2:
        setDiceimg1(Dice2)
        break;
      
      case 3:
        setDiceimg1(Dice3)
        break;
      
      case 4:
        setDiceimg1(Dice4)
        break;
        
      case 5:
         setDiceimg1(Dice5)
         break;
        
      case 6:
          setDiceimg1(Dice6)
          break;
                                   
     
      }

      switch(randomNumber2)
     {
      case 1:
        setDiceimg2(Dice1)
        break;
      
      case 2:
        setDiceimg2(Dice2)
        break;
      
      case 3:
        setDiceimg2(Dice3)
        break;
      
      case 4:
        setDiceimg2(Dice4)
        break;
        
      case 5:
         setDiceimg2(Dice5)
         break;
        
      case 6:
          setDiceimg2(Dice6)
          break;
                                   
     
      }
  
  

}


  return <View style={styles.container}>
    
    <View style={styles.heading}>
    <Text style={styles.head}>Dice Simulator</Text>
    </View>
    
    <View style={styles.dice} >  
       <Image source={DiceImg1} style={styles.img}/>
       <Image source={DiceImg2} style={styles.img}/>
    </View>
    
    <View style={styles.btnarea}>
      <Pressable onPress={onPressHandler}>
      <Text style={styles.playbtn}>START</Text>
      </Pressable>

      <Pressable  onPress={onReset} style={[styles.playbtn,{color:'red'},{backgroundColor:'rgb(254,223,205)'}]}>
      <Text >RESET</Text>
      </Pressable>
    </View>
 
  </View>
}
export default App

const styles=StyleSheet.create({
container:{
flex:1,
justifyContent:"center",
alignContent:"center",
},
dice:{
flex:5,  
flexDirection:"row",
justifyContent:"center",
alignItems:"center",
alignContent:"space-around"
},

img:{
width:120,
height:120
},

playbtn:{
fontSize:25,
marginTop:30,
marginHorizontal:100,
color:'green',
paddingHorizontal:40,
paddingVertical:10,
alignSelf:"center",
borderWidth:2,
borderRadius:10,
backgroundColor:'rgb(205,254,211)',
borderColor:"grey"
},
heading:{
  flex:4,
  justifyContent:"center",
  alignItems:"center"
},
btnarea:{
  flex:4
},
head:{
fontSize:40,
color:"black",
backgroundColor:"lightgrey",
borderRadius:10,

}
})