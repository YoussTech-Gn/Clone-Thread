import LottieView from "lottie-react-native";

export default function AnimationLoties({
  w = 90,
  h = 90,
  loop = false,
  ref,
  ...style
}: {
  // style :
  ref?: any;
  w?: number;
  h?: number;
  loop?: boolean;
}) {
  return (
    <LottieView
      source={require("@/assets/animations/Threads.json")}
      loop={loop}
      {...style}
      style={{
        width: w,
        height: h,
      }}
      autoPlay
    />
  );
}
