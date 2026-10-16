import store from "@/store/store";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Provider } from "react-redux";

const PageLayout = () => {
  return (
    <Provider store={store}>
      <Tabs
        screenOptions={{
          // tabBarActiveTintColor: "white",/
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused, size }) => (
              <Ionicons color={color} size={size} name="home" />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            tabBarIcon: ({ color, focused, size }) => (
              <Ionicons color={color} size={size} name="search" />
            ),
          }}
        />
      </Tabs>
    </Provider>
  );
};

export default PageLayout;
