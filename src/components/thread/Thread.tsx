import { ThreadType } from "@/types/types";
import { memo } from "react";
import { StyleSheet, View } from "react-native";
import ThreadActions from "./subthread/ThreadActions";
import ThreadHeader from "./subthread/ThreadHeader";
import ThreadLeftSide from "./subthread/ThreadLeftSide";
import ThreadContent from "./subthread/Threadcontent";

interface ThreadProps {
  thread: ThreadType;
}

const ThreadItem = ({ thread }: ThreadProps) => {
  return (
    <View style={setStyle.container}>
      <ThreadLeftSide author={thread.author} replies={thread.replies} />
      <View style={setStyle.right}>
        <ThreadHeader author={thread.author} createdAt={thread.createdAt} />
        <ThreadContent content={thread.content} image={thread.image} />
        <ThreadActions
          likesCount={thread.likesCount}
          sharedCount={thread.sharedCount}
          replies={thread.replies}
        />
        {/* <ThreadFooter likesCount={thread.likesCount} replies={thread.replies} /> */}
      </View>
    </View>
  );
};

const setStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
    padding: 8,
    paddingBottom: 30,
  },
  right: { gap: 1, flexShrink: 1 },
});

// memo: لا يُعاد رسم العنصر إلا إذا تغيّر مرجع thread
export default memo(ThreadItem);
