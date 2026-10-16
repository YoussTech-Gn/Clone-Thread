import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const search = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Were in Serch page</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default search;
