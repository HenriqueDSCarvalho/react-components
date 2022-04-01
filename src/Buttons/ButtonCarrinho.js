import { View, Button, StyleSheet } from "react-native";

export default function ButtonCarrinho() {
  return (
    <View style={styles.cartArea}>
      <Button
        title="Adicionar ao carrinho"
        color="#007AFF"
        accessibilityLabel="Adicionar ao carrinho"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cartArea: {
    padding: 20,
  },
});
