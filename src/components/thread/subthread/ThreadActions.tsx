import { Colors, IconsSize } from "@/constants/Colors";
import { ThreadType } from "@/types/types";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, View } from "react-native";

type threadProps = Pick<ThreadType, "likesCount" | "replies" | "sharedCount">;

const ThreadActions = ({
  likesCount,
  sharedCount,
  replies = [],
}: threadProps) => {
  const [liked, setLike] = useState(false);
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 13,
        marginTop: 5,
        alignItems: "center",
      }}
    >
      <Text style={{ alignItems: "center" }} onPress={() => setLike(!liked)}>
        <Ionicons
          name={liked ? "heart" : "heart-outline"}
          size={IconsSize}
          color={liked ? "#ed4956" : Colors.black}
          style={{ fontWeight: "700" }}
        />
        <Text> {likesCount}</Text>
      </Text>
      <Text>
        <Ionicons
          name="chatbubble-outline"
          size={IconsSize}
          color={Colors.black}
          style={{ fontWeight: "700" }}
        />
        {replies?.length > 0 ? replies?.length : undefined}
      </Text>
      <Text>
        <AntDesign
          name="retweet"
          size={IconsSize}
          color={Colors.black}
          style={{ fontWeight: "700" }}
        />
      </Text>
      <Text>
        <Feather
          name="send"
          size={IconsSize}
          color={Colors.black}
          style={{ fontWeight: "700" }}
        />
        {sharedCount}
      </Text>
    </View>
  );
};

export default ThreadActions;
