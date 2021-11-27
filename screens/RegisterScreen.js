import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { auth,db } from '../firebase';
import { createUserWithEmailAndPassword,updateProfile } from '@firebase/auth';
import { doc, refEqual, setDoc } from '@firebase/firestore';

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [imageUrl,setImageUrl] = useState("");
    
    const register = ()=>{
        createUserWithEmailAndPassword(auth,email,password).then((authUser)=>{
            updateProfile(auth.currentUser,{
                displayName: name,
                photoURL: imageUrl||"https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            }).then(()=>console.log(authUser?.currentUser?.photoURL)).catch((e)=>alert(e));
        }).catch((error)=>{alert(error)});
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light"/>
            <Text h1 style = {{marginBottom: 50}}>
                Register Screen
            </Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name"
                    autoFocus
                    type="text"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    placeholderTextColor="#D0D0D0" />
                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholderTextColor="#D0D0D0" />
                <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    placeholderTextColor="#D0D0D0" />
                <Input
                    placeholder="Profile Picture URL (optional)"
                    type="text"
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    placeholderTextColor="#D0D0D0"
                    onSubmitEditing={register}

                />
            </View>
            <Button 
            containerStyle={styles.button}
            raised 
            onPress={register} 
            title="Register"/>
            <View style={{height:100,}}/>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white",
    },
    inputContainer:{
        width:300,
    },
    button:{
        width:200,
        marginTop:10,
    },
})
