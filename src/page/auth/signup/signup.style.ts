import { Colors } from "@/src/theme/colors";
import { horizontalScale, verticalScale } from "@/src/theme/metrics";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:Colors.lightGrey
  },
  headerView: {
      marginTop: verticalScale(110),
      alignItems: "center",
      marginBottom: verticalScale(30)
  },
  title: {
    fontSize: 58,
    fontWeight: "bold",
  },
  lable: {
    fontSize: 18,
    marginTop: verticalScale(4),
    fontWeight: "normal",
  },
  inputView:{
    marginTop: verticalScale(30),
    gap: 8
  },
  button: {
    marginTop: verticalScale(60),
  },
  alreadyAccount: {
    marginTop: verticalScale(14),
    flexDirection: "row",
    gap:horizontalScale(6),
    justifyContent:'center',
  },
  loginText: {
    color: Colors.black,
  },
  logIn: {
    color: Colors.tertiary,
    fontWeight:'600'
  },
  boldText: {
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginLeft: 4
  }
});