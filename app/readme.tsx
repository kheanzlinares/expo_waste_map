import { ScrollView, Text } from "react-native";

export default function ReadmeScreen() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Readme</Text>
      <Text style={{ marginTop: 10 }}>
        This is a web-only Expo app using react-native, typescript and maplibre-gl to
        display mock waste container locations. Use the checkboxes to filter
        Paper and Glass containers. Data is mock-based.
      </Text>
    </ScrollView>
  );
}
