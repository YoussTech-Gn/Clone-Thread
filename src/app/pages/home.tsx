import ThreadItem from "@/components/thread/Thread";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHook";
import { generateThreads } from "@/store/slices/threads";
import { ThreadType } from "@/types/types";
import LottieView from "lottie-react-native";
import { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, ListRenderItemInfo, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const keyExtractor = (item: ThreadType) => item.id;

const Home = () => {
  const animationReference = useRef<LottieView>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  // اشتراك بأصغر قطعة ممكنة فقط (threads)، ولا نقرأ user لأننا لا نستعمله
  const threads = useAppSelector((state) => state.thread.threads);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(generateThreads());
  }, [dispatch]);

  // تنظيف المؤقت عند مغادرة الشاشة
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    animationReference.current?.play(30, 120);
    dispatch(generateThreads());
    timeoutRef.current = setTimeout(() => setRefreshing(false), 1200);
  }, [dispatch]);

  // دالة ثابتة المرجع: FlatList لا يعيد بناء الصفوف بلا سبب
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<ThreadType>) => <ThreadItem thread={item} />,
    [],
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={threads}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        initialNumToRender={4}
        maxToRenderPerBatch={4}
        windowSize={7}
        removeClippedSubviews
        ListHeaderComponent={
          <LottieView
            ref={animationReference}
            autoPlay
            source={require("@/assets/animations/Threads.json")}
            loop={false}
            style={{ width: 100, height: 100, alignSelf: "center" }}
          />
        }
        refreshControl={
          <RefreshControl
            progressBackgroundColor="transparent"
            tintColor="transparent"
            colors={["transparent"]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
