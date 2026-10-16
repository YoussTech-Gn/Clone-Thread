import { ThreadType } from "@/types/types";
import { Image } from "expo-image";
import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

type ThreadContentProps = Pick<ThreadType, "content" | "image">;

const ThreadContent = ({ content, image }: ThreadContentProps) => {
  return (
    <View style={setStyle.container}>
      <Text>{content}</Text>
      {image && (
        <Image
          style={setStyle.image}
          source={image}
          contentFit="cover"
          transition={300}
        />
      )}
    </View>
  );
};

const setStyle = StyleSheet.create({
  container: { padding: 6, gap: 5 },
  image: { width: "100%", minHeight: 300, borderRadius: 10 },
});

export default memo(ThreadContent);
