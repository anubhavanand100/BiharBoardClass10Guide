import { View, Text } from "react-native";

export default function NotesScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        बिहार बोर्ड कक्षा 10 नोट्स
      </Text>
      <Text>जल्द ही सभी विषयों के नोट्स यहाँ मिलेंगे।</Text>
    </View>
  );
}
