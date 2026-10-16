import { ThreadType } from "@/types/types";
import { Image } from "expo-image";
import { memo } from "react";
import { StyleSheet, useColorScheme, View } from "react-native";

type ThreadProps = Pick<ThreadType, "author" | "replies">;

const ThreadLeftSide = ({ author, replies = [] }: ThreadProps) => {
  const currentTheme = useColorScheme();
  const borderColor = currentTheme === "light" ? "#00000020" : "#ffffff20";

  return (
    <View style={setStyle.column}>
      <Image
        source={author.avatar}
        style={setStyle.image}
        contentFit="cover"
        transition={200}
      />
      <View style={[setStyle.line, { backgroundColor: borderColor }]} />
      <View style={setStyle.avatars}>
        {/* slice(0,3): آمن دائماً — يعطي 0 أو 1 أو 2 أو 3 عناصر ولا ينهار */}
        {replies.slice(0, 3).map((reply, i) => {
          const size = (i + 1) * 7;
          return (
            <Image
              key={reply.id}
              source={reply.author.avatar}
              style={{ width: size, height: size, borderRadius: size / 2 }}
              contentFit="cover"
              transition={200}
            />
          );
        })}
      </View>
    </View>
  );
};

const setStyle = StyleSheet.create({
  column: { justifyContent: "space-between" },
  image: { width: 50, height: 50, borderRadius: 21 },
  line: { width: 1.5, flexGrow: 1, alignSelf: "center" },
  avatars: { width: 20, alignItems: "center", alignSelf: "center", gap: 3 },
});

export default memo(ThreadLeftSide);
