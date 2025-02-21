import { Colors } from "@/src/theme/colors";
import { verticalScale } from "@/src/theme/metrics";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginBottom: verticalScale(14),
        height:50,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    backButton: {
      position: "absolute",
      left: 0,
    },
    title: {
      color: Colors.black,
    },
})