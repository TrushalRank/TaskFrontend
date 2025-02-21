import { Colors } from "@/src/theme/colors";
import { horizontalScale, verticalScale } from "@/src/theme/metrics";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.lightGrey
    },
    taskDetailView:{
        paddingHorizontal:horizontalScale(20),
        gap: 16,
    },
    btnAdd:{
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: verticalScale(20),
    }
});