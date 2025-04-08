import { StyleSheet, Text, View } from "react-native";
import React from "react";


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Drawer Screen Julinha</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff69b4",
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        color: "#333",
    },
});