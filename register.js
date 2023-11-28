import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import backgroundImage from './img/fondo1.jpg';
import { useFonts } from 'expo-font';

export default function Register(props) {
const { navigation } = props;
return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage} blurRadius={7}>
    <View style={styles.container}>
        <Text style={styles.TextStyle}>Crea tu cuenta y comienza a explorar</Text>
        <Text style={styles.TextStyle4}>¡Empieza ahora!</Text>

    <View style={styles.formContainer}>
        <Text style={styles.TextStyle3}>Ingresa tu nombre</Text>
        <TextInput style={styles.TextInputStyle} placeholder="Nombre" />

        <Text style={styles.TextStyle3}>Ingresa un correo</Text>
        <TextInput style={styles.TextInputStyle} placeholder="nombre@ejemplo.com" />

        <Text style={styles.TextStyle3}>Ingresa una contraseña</Text>
        <TextInput style={styles.TextInputStyle} placeholder="*******" />

        <TextInput style={styles.TextInputStyle} placeholder="Confirma tu contraseña" />

        <TouchableOpacity style={styles.TouchableOpacitybutton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.TextStyle2}>Finalizar</Text>
        </TouchableOpacity>
    </View>
    </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    TextStyle: {
    fontSize: 25,
    color: "#000000",
    flex: 0.3,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'NotoSerif-Italic-VariableFont',
    },
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    },
    formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 20, 
    borderRadius: 8,
    },
    TextInputStyle: {
    color: '#06001A',
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: 220,
    marginBottom: 10,
    backgroundColor: 'transparent',
    borderRadius: 8,
    height: 50,
    },
    TouchableOpacitybutton: {
    fontSize: 15,
    padding: 8,
    margin: 10,
    width: 205,
    marginBottom: 10,
    backgroundColor: '#D9C69F',
    borderRadius: 8,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    },
    TextStyle2: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
    },
    TextStyle3: {
    marginBottom: 13,
    fontSize: 18,
    fontWeight: '300',
    },
    TextStyle4: {
    marginBottom: 12,
    fontSize: 19,
    fontWeight: '400',
    },
});
