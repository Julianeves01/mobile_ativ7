import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Drawer2() {
    return (
        <View style={styles.container}>
        <Image source={{uri: "https://i.pinimg.com/736x/1a/f7/32/1af732ea7da0d814dec002b2a24aee29.jpg"}} style={styles.image} />
        <Text style={styles.text}> Vei que amor 😭🎀</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d298c4",
        padding: 20,
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 15,
        marginBottom: 15,
    },
    text: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
        paddingHorizontal: 20,
    },
});