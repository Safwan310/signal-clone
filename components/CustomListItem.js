import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem,Avatar } from 'react-native-elements'
const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
            <ListItem onPress={()=>enterChat(id,chatName)} key={id} bottomDivider>
                <Avatar
                rounded
                source={{
                    uri:"https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png",
                }}
                />
                <ListItem.Content>
                    <ListItem.Title style={{fontWeight:800}}>
                        {chatName}
                    </ListItem.Title>
                    <ListItem.Subtitle 
                    numberOfLines={1}
                    ellipsizeMode="tail">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, delectus recusandae nesciunt vel laborum ducimus aspernatur dolore earum inventore accusamus excepturi dolorum ad optio quam quidem voluptates soluta impedit maiores!
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
