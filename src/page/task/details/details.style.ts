import { Colors } from "@/src/theme/colors";
import { horizontalScale } from "@/src/theme/metrics";
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
        gap:10
    },
    detailCard:{
        backgroundColor: Colors.white,
        borderRadius: 10,
        shadowColor: Colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    p10:{ padding: 10 },
    titleView:{
        flexDirection: "row",
        gap: 6,
        alignItems: "center"
    },
    textColor:{
        color: Colors.grey
    },
});