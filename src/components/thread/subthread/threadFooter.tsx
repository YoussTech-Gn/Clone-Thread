import { Colors } from "@/constants/Colors";
import { ThreadType } from "@/types/types";
import { Text } from "react-native";

type threadProps = Pick<ThreadType, "replies" | "likesCount">;

const ThreadFooter = ({ likesCount, replies }: threadProps) => {
  return (
    <Text style={{ color: Colors.grayColor }}>
      {replies?.length} Replies - {likesCount} Likes
    </Text>
  );
};

export default ThreadFooter;
