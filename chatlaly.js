import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image,ImageBackground } from 'react-native';

const ChatList = ({ navigation }) => {
    const chats = [
    { id: '1', name: 'Ivaan Rojas', avatar: require('./img/foto1.jpg'), message: 'Holaaa, te extrañe mucho<3'  },
    { id: '2', name: 'Jesús', avatar: require('./img/foto2.jpg'), message: 'Pasa la tarea de diseñoooo'},
    { id: '3', name: 'Sara Luna', avatar: require('./img/foto3.jpg'), message: 'Hola hija, ¿como teva?' },
    { id: '4', name: 'Mafer Rivera', avatar: require('./img/foto4.jpg'), message: 'Hola Citla, ¿cómo estás?' },
    { id: '5', name: 'Esteban', avatar: require('./img/foto10.jpg'), message: 'Mucho tiempo sin saberde ti, cuentame ¿que haz hecho?' },
    { id: '6', name: 'Michell Cruz', avatar: require('./img/foto5.jpg'), message: '¿Cuando saliditaaaaa?' },
    { id: '7', name: 'La vecina', avatar: require('./img/foto9.jpg'), message: 'Me puedes prestar la antena de tu casa?' },
    { id: '8', name: 'Martin', avatar: require('./img/foto7.jpg'), message: 'He oido que te va bien en la universidad...' },
    { id: '9', name: 'Obed Luna', avatar: require('./img/foto6.jpg'), message: 'Contesta mi mensaje en mi otro numero' },
    { id: '10', name: 'Brodi', avatar: require('./img/foto8.jpg'), message: 'Que onda, ya checaste el envío?' },
    ];

    const navigateToChat = (chatId) => {
        navigation.navigate('Chat', { chatId });
        };

    return (
    <View style={styles.container}>
        <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToChat(item.id)}>
            <View style={styles.chatItem}>
                <Image source={item.avatar} style={styles.avatar} />
                <View style={styles.textContainer}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.message}>{item.message}</Text>
                </View>
            </View>
            </TouchableOpacity>
        )}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
    },
    chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    },
    avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
    },
    textContainer: {
    flex: 1,
    marginLeft: 8,
    },
    chatName: {
    fontSize: 18,
    fontWeight: 'bold',
    },
    message: {
    fontSize: 16,
    color: '#777',
    },
});

export default ChatList;