import { addDoc, collection } from '@firebase/firestore';
import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button,Input } from 'react-native-elements'
import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { db } from '../firebase';
const AddChat = ({navigation}) => {
    const [chatName, setChatName] = useState("");
    const [name, setName] = useState("");
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat"
        })
    }, [navigation])

    const createChat = async () => {
        await addDoc(collection(db,"chats"),{
            chatName: chatName,
        })
        .then(()=>{navigation.goBack()})
        .catch((err)=>alert(err))
    }

    return (
        <View style={styles.container}>
            <Input
            placeholder="Enter a chat name"
            type="text"
            value = {chatName}
            onChangeText={(text)=>setChatName(text)}
            leftIcon={
                <Icon name="wechat" size={24} color="black"/>
            }
            />
            <Button
            onPress={createChat}
            title="Create chat"/>
        </View>
    )
}

export default AddChat

const styles = StyleSheet.create({
    container:{
        padding:30,
        height:"100%",

    },
})
