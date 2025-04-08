import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DetailsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Ola amores! </Text>
            <Text style={styles.text}> Você esta navegando na Details Screen </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flex: 1,
        backgroundColor: "#d298c4",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        marginBottom: 20,
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    },
    text: {
        fontSize: 16,
        color: "#fff",
    },
});