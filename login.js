import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import background from './img/fondo12.jpg';

export default function Login(props) {
    const { navigation } = props;

    return (
    <ImageBackground source={background} style={styles.backgroundImage} blurRadius={7}>
        <View style={styles.container}>
        <Text style={styles.title}>CHATLALY</Text>
        <View style={styles.formContainer}>
        <Text style={styles.text}>Correo electrónico</Text>
        <TextInput style={styles.inputs} placeholder="Correo" />

        <Text style={styles.text}>Contraseña</Text>
        <TextInput style={styles.inputs} placeholder="Contraseña" />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chatlaly')}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.forgotPassword}>¿Olvidó su contraseña?</Text>

        <Text style={styles.noAccount}>¿No tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signup}>Ingresa ahora</Text>
        </TouchableOpacity>
        </View>
        </View>
    </ImageBackground>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Cambié 'white' a 'transparent' para que el fondo de la imagen sea visible
},
title: {
    color: '#a9a9a9',
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
},
text: {
    color: '#a9a9a9',
    fontSize: 20,
},
inputs: {
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
button: {
    fontSize: 15,
    padding: 8,
    margin: 10,
    width: 170,
    marginBottom: 10,
    backgroundColor: '#D9C69F',
    borderRadius: 8,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
},
buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
    },
    
forgotPassword: {
    color: '#000000',
    fontSize: 13,
    marginTop: 10,
    textAlign:'center'
},
noAccount: {
    color: '#a9a9a9',
    marginTop: 10,
    textAlign:'center'
},
signup: {
    color: '#44546A',
    textAlign:'center'
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

});

