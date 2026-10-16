import { Colors } from "@/constants/Colors";
import { ThreadType } from "@/types/types";
import { timeAgo } from "@/utils/timeAgo";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

type threadProps = Pick<ThreadType, "author" | "createdAt">;

const ThreadHeader = ({ author, createdAt }: threadProps) => {
  return (
    <View style={setStyle.container}>
      <View style={setStyle.row}>
        <Text style={setStyle.textHeader}>{author.name}</Text>
        {author.verified && (
          <MaterialIcons name="verified" size={14} color={Colors.verified} />
        )}
      </View>
      <View style={setStyle.row}>
        <Text style={setStyle.timeAgo}>{timeAgo(createdAt)}</Text>
        <Feather name="more-horizontal" size={14} color={Colors.grayColor} />
      </View>
    </View>
  );
};

const setStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 1,
    flexShrink: 1,
  },
  row: { alignItems: "center", gap: 10, flexDirection: "row" },
  textHeader: { fontWeight: "600", letterSpacing: 1 },
  timeAgo: { color: Colors.grayColor },
});

export default memo(ThreadHeader);
