import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button,Image,Input } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { onAuthStateChanged } from '@firebase/auth';
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(authUser)=>{
            if(authUser){
                alert(authUser.photoURL)
                navigation.replace("Home Screen");
            }
        })
        return unsubscribe;
    },[])
    const signIn = () => {
        signInWithEmailAndPassword(auth,email,password)
        .catch((err)=>alert(err));
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>
            <Image 
            source={{
                uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png"
            }}
            style={{
                width:200,
                height:200,
            }}
            />
            <View style={styles.inputContainer}>
                <Input 
                value={email} 
                onChangeText={(text)=>setEmail(text)} 
                placeholder="Enter your email addres" 
                autofocus 
                type="email"/>

                <Input 
                value={password} 
                onChangeText={(text)=>setPassword(text)} 
                placeholder="Enter your password" s
                ecureTextEntry 
                type="password"/>
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
            <Button onPress={()=>{navigation.navigate("Register Screen")}} containerStyle={styles.button} type="outline" title="Register"/>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    inputContainer:{
        width:300,
    },
    button:{
        width:200,
        marginTop:10,
    },
})
