import { View, Text, Button, StyleSheet } from 'react-native';

export default function About({ Navigation }) {
    return (
        <View style={styles.container}>
            <Text>about</Text>
            <Button title="navigator back" onPress={() => navigation.navigate("Home")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'

    }
});