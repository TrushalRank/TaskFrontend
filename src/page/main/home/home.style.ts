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
    taskCard: {
        paddingVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(8),
        borderRadius: 10,
        backgroundColor: Colors.white,
        marginBottom: verticalScale(12),
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    taskTitle: {
        fontWeight: '600',
        color: Colors.black
    },
    taskList: {
        flexGrow:1,
        paddingHorizontal: horizontalScale(20),
        paddingBottom:verticalScale(10)
    },
    fabIcon:{
        position: "absolute",
        right: horizontalScale(18),
        bottom: verticalScale(28),
        backgroundColor: Colors.shadowPurple,
    },
});