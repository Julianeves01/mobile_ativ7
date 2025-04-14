import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function DrawerScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Ola amores! </Text>
            <Text style={styles.subtitle}> Você está navegando na página principal: Drawer Screen! </Text>
            <Text style={styles.description}>Sejam bem vindos! 🎀</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d298c4",
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        marginBottom: 10,
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
    },
    subtitle: {
        fontSize: 20,
        color: "#fff",
        textAlign: "center",
        marginBottom: 15,
        paddingHorizontal: 15,
    },
    description: {
        fontSize: 30,
        color: "#fff",
        textAlign: "center",
        paddingHorizontal: 20,
    },
});