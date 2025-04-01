import { StyleSheet, Text, View } from "react-native";

export default function Drawer2() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <Text style={styles.text}> Vei que criança fofa </Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d298c4",
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
        color: "#fff",
    },
});