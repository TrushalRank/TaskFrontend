import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Toast from "react-native-toast-message";
import { persistor, store } from "@/src/store/store";

export default function Layout() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* Stack Navigator */}
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="auth/login" />
          <Stack.Screen name="auth/signup" />
          <Stack.Screen name="main/home" />
          <Stack.Screen name="task/create" />
          <Stack.Screen name="task/details" />
        </Stack>

        {/* Toast component must be outside Stack */}
        <Toast />
      </PersistGate>
    </Provider>
  );
}
