import React from "react";
import ActivityIndicator from "../../atoms/activityIndicator/activityIndicator.atoms";
import { View } from "react-native";
import { styles } from "./activityIndicator.styles";

const ActivityIndicatorMolecules = () => {
  return (
    <View style={styles.loaderBox}>
      <ActivityIndicator />
    </View>
  );
};

export default ActivityIndicatorMolecules;
