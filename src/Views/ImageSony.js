import { Image, View, Text, StyleSheet } from "react-native";

export default function ImageSony() {
  return (
    <View style={styles.detailsContainer}>
      <Image
        style={styles.icon}
        source={{
          uri: "https://arquivosbordados.com/wp-content/uploads/2021/10/embroidery-design-logo_753eeb22-e242-4204-bf27-f3012cc27322-1.jpg",
        }}
      ></Image>
      <Text style={styles.sonyName}>Sony</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
  sonyName: {
    fontSize: 15,
    color: "#6b5b95",
    marginLeft: 20,
    lineHeight: 10,
    paddingTop: 10,
  },
  detailsContainer: {
    padding: 20,
    flexDirection: "row",
  },
});
