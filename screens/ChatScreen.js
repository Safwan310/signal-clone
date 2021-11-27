import React, { useLayoutEffect } from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput } from 'react-native'
import { Avatar } from 'react-native-elements'
import { AntDesign } from "@expo/vector-icons"
import Icon from 'react-native-vector-icons/FontAwesome';

const ChatScreen = ({navigation,route}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
           title:"Chats",
           headerTitle:()=>(
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
               }}>
                <Avatar rounded source={{uri:"https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"}}/>
                <Text
                style={{
                    color:"white",
                    marginLeft: 10,
                    fontWeight:"700"
                }}
                >{route.params.chatName} CHECK</Text>
               </View>
           ),
           headerLeft:()=> (
               <TouchableOpacity
               style={{marginLeft:10}}
               onPress={navigation.goBack}
               >
                   <AntDesign name="arrowleft" size={24} color="white"/>
               </TouchableOpacity>
           ),
           headerRight:()=>(
               <View
               style={{
                   flexDirection:"row",
                   justifyContent:"space-between",
                   width: 80,
                   marginRight: 20,
               }}
               >
                   <TouchableOpacity>
                        <Icon name="video-camera" size={24} color="white">

                        </Icon>
                   </TouchableOpacity>
                   <TouchableOpacity>
                        <Icon name="phone" size={24} color="white">

                        </Icon>
                   </TouchableOpacity>
               </View>
           )
        });
    }, [navigation])

    return (
        <SafeAreaView style={{
            flex:1,
            backgroundColor:"white",
        }}>
            <KeyboardAvoidingView
            behavior = {Platform.OS === "ios" ? "padding":"height"}
            style={styles.container}
            keyboardVerticalOffset={90}>
                <>
                    <ScrollView>

                    </ScrollView>
                    <View>
                        <TextInput
                        placeholder="Enter Text"
                        >

                        </TextInput>
                    </View>
                </>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})
