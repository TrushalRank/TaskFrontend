import { Colors } from "@/src/theme/colors";
import { Height, Width } from "@/src/theme/metrics";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loaderBox: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.transparentBG,
    width: Width,
    height: Height
  },
});
