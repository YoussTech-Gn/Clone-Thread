import LottieView from "lottie-react-native";
import { useRef } from "react";

const RefreshControl = () => {
  const animationRef = useRef<LottieView>(null);

  return (
    <LottieView
      ref={animationRef}
      source={require("@/assets/animations/Threads.json")}
      loop={false}
      autoPlay
      style={{
        width: 90,
        height: 90,
        alignSelf: "center",
      }}
      onAnimationFailure={(err) => {
        console.error(err);
      }}
    />
  );
};

export default RefreshControl;
