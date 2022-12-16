import { View, Text,StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

const Login=({navigation})=>{
 const {userName,setUserName} = useState("");
const {password,setPassword} =useState("");
console.log(userName,password);
const submit=()=>{
  if(userName==="Yashasvi" && password==="Dikshit"){
    Alert.alert(`Thankyou ${userName}`);
    navigation.navigate("Home");
  }
  else{
    Alert.alert(`Username and password is not correct`)
  }
};

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login</Text>
      <Text style={styles.description}>Login & get to see the news around the world</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>
        Enter your name </Text>
        <TextInput
         style={styles.inputStyle}
          autoCorrect={false}
          value={userName}
          onChangeText={(actualData)=>
            setUserName(actualData)
          }

 />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>
        Enter your password </Text>
        <TextInput 
        style={styles.inputStyle}
         autoCorrect={false} 
         secureTextEntry={true} 
         value={password}
         onChangeText={(actualData)=>
          setPassword(actualData)
        }

        />
      </View>
      <TouchableOpacity style={styles.buttonStyle}
      onPress={()=>submit()} >
        <Text>LOGIN</Text>
        
      </TouchableOpacity>
     
      </View>

  );
};

const styles= StyleSheet.create({
    mainContainer:{
        height:"100vh",
        paddingHorizontal:30,
         paddingTop:30,
         backgroundColor: "#fff",

    },
    mainHeader:{
        fontSize:25,
        color:"#344055",
        fontWeight:"500",
        paddingTop:20,
        paddingBottom:15,
        textTransform: "capitalize",
        fontFamily:"bold"
    },
    description:{
        fontSize:20,
        color:"#7d7d7d",
        paddingBottom:20,
        lineHeight : 25,
        fontFamily :"regular"
    },
    inputContainer:{
        marginTop:20,
    },
    labels:{
        fontSize:18,
        color:"#7d7d7d",
        marginTop:10,
        lineHeight:25,
        fontFamily:"regular",
        
    },
    inputStyle:{
        borderWidth:1,
        borderColor:"rgba(0,0,0,0.3)",
        paddingHorizontal:15,
        paddingVertical:7,
        borderRadius:1,
        fontFamily:"regular",
        fontSize:18,
        
    },
    buttonStyle:{
        marginTop:20,
      width:100,
      height: 50,
      textAlign:"center",
      justifyContent:"center",
backgroundColor:"#4630EB"
      
    }

})
export default Login;