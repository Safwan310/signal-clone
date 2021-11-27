import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { TouchableOpacity } from 'react-native' 
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomListItem from '../components/CustomListItem'
import { auth,db } from '../firebase'
import { signOut } from '@firebase/auth'
import { SimpleLineIcons,AntDesign } from '@expo/vector-icons'
import { collection, onSnapshot } from '@firebase/firestore'

const HomeScreen = ({navigation}) => {
    const [chats, setChats] = useState([]);
    const signOutUser = () =>{
        signOut(auth)
        .then(()=>{
            navigation.replace('Login Screen')
        })
        .catch((e)=>alert(e));
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal 2:27:00",
            headerStyle:{backgroundColor:"#fff"},
            headerTitleStyle:{color:"black"},
            headerTintColor:"black",
            headerLeft:()=>(
                <View style={{marginLeft: 20}}>
                    <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
                        <Avatar rounded source={{uri: auth?.currentUser?.photoURL}}/>
                    </TouchableOpacity>
                </View>
            ),
            headerRight:()=>(
                <View style={styles.headerRightIcon}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign 
                        size={24}
                        color="black"
                        name="camera"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate("AddChat")}
                    activeOpacity={0.5}>
                        <SimpleLineIcons size={24} color="black" name="pencil"/>
                    </TouchableOpacity>
                </View>
            )
        });
        
    }, [])

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db,"chats"),(snapshot)=>{
            setChats(snapshot.docs.map((doc)=>({
                id:doc.id,
                data: doc.data()
            })))
        })
        return unsubscribe;
    }, [])

    const enterChat = (id,chatName) =>{
        navigation.navigate("Chat",{id,chatName});
}
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {chats?.map((chat)=>
                    (<CustomListItem 
                    key={chat.id}
                    id={chat.id} 
                    chatName={chat.data.chatName}
                    enterChat={enterChat}
                    />)
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        height:"100%"
    },
    headerRightIcon:{
        flexDirection:"row",
        justifyContent:"space-between",
        width: 80,
        marginRight: 20
    }
})
