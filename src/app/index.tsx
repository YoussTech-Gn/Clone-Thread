// import AnimationLotties from "@/components/Animation";
import AnimationLotties from "@/components/Animation";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const route = useRouter();
  const startPoint = () => {
    route.push("/pages/search");
  };
  return (
    <View style={styles.container}>
      <AnimationLotties />
      <Text style={styles.text}>Welcome To My clone Threads </Text>
      {/* <Pressables  /> */}
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.9}
        onPress={startPoint}
      >
        <Text style={styles.btnTxt}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 1,
    textAlign: "center",
  },
  btn: {
    marginTop: 10,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "rgba(10, 43, 134, 0.87)",
    borderRadius: 8,
    // color: "#fff",
  },
  btnTxt: {
    fontSize: 17,
    color: "#fff",
    letterSpacing: 1,
    fontWeight: "600",
    textTransform: "capitalize",
  },
});
