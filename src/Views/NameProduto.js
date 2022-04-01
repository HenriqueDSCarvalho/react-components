import { View, Text, StyleSheet } from "react-native";

export default function () {
  return (
    <View style={styles.detailsView}>
      <Text style={styles.productName}>Xbox Series X</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsView: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  productName: {
    fontSize: 30,
    paddingLeft: 10,
    fontWeight: "bold",
    color: "#1a42a7",
    width: "100%",
  },
});
