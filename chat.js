import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

const ChatScreen = ({ route }) => {
    const { chatId } = route.params;
    const chatConversations = {
    '1': [
        { id: '1', text: 'Holaaa, te extrañe mucho' },
        { id: '2', text: 'yo tambieeeeeen.' },
        ],
    '2': [
        { id: '1', text: 'Hola, pasa la tarea de diseño.' },
        { id: '2', text: 'Sí, aquí está. ¿Necesitas algo más?' },
        { id: '1', text: 'Creo que no, habrá clases mañana?' },
        { id: '2', text: 'No lo se, deja pregunto' },
        ],
    '3': [
        { id: '1', text: 'Hola hija, ¿como te va? ' },
        { id: '2', text: 'Algo cansado ma, pero to bien ¿tu que tal?' },
        { id: '1', text: 'Que bueno, yo aquí llendo al trabajo' },
        ],
    '4': [
        { id: '1', text: 'Hola Citla, ¿Como estas?.' },
        { id: '2', text: 'Todo bien Feer, como van tus vacaciones?' },
        ],
    };

    const messages = chatConversations[chatId] || [];

    const renderItem = ({ item, index }) => (
    <View style={[styles.messageContainer, index % 2 === 0 ? styles.sentMessage : styles.receivedMessage]}>
        <View style={styles.messageBubble}>
        <Text style={styles.messageText}>{item.text}</Text>
        </View>
    </View>
    );

    return (
    <View style={styles.container}>
        <Text style={styles.chatTitle}>En línea</Text>
        <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.messagesContainer}
        />
        <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Escribe un mensaje..."
            placeholderTextColor="#888"
            />
        <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    },
    messagesContainer: {
    flex: 1,
    padding: 16,
    },
    messageContainer: {
    marginBottom: 16,
    justifyContent: 'flex-end',
    },
    sentMessage: {
    flexDirection: 'row-reverse',
    },
    receivedMessage: {
    flexDirection: 'row',
    },
    messageBubble: {
    backgroundColor: '#D9C69F',
    padding: 10,
    borderRadius: 8,
    maxWidth: '70%',
    },
    messageText: {
    color: '#fff',
    fontSize: 16,
    },
    inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    },
    input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 16,
    },
    sendButton: {
    marginLeft: 8,
    padding: 10,
    backgroundColor: '#815419',
    borderRadius: 20,
    },
    sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    },
    chatTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    },
});

export default ChatScreen;
