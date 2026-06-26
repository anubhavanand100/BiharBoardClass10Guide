import { View, Text } from "react-native";

export default function NotesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Bihar Board Class 10 Notes
      </Text>

      <Text>📘 हिंदी</Text>
      <Text>📗 अंग्रेज़ी</Text>
      <Text>📕 गणित</Text>
      <Text>📙 विज्ञान</Text>
      <Text>📓 सामाजिक विज्ञान</Text>
      <Text>📔 संस्कृत</Text>
    </View>
  );
}
