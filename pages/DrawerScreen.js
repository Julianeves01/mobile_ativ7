import { StyleSheet, Text, View } from "react-native";


export default function DrawerScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <Text style={styles.text}>Drawer Screen Julinha</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff69b4",
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontWeight: "bold",
        marginTop: 20,
        fontSize: 24,
        color: "#333",
    },
});