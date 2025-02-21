import Toast from "react-native-toast-message";

/**
 * Show toast message
 * @param type - "success" | "error" | "info"
 * @param title - Main title of the toast
 * @param message - Subtitle/message of the toast
 */
export const showToast = (type: "success" | "error" | "info", title: string, message: string) => {
  Toast.show({
    type,
    text1: title,
    text2: message,
    position: "top",
  });
};
