import React from "react";
import { View } from "react-native";
import { styles } from "./loader.styles";
import ActivityIndicatorMolecules from "../../molecules/activityIndicator/activityIndicator.molecules";

const Loader = ({ animating = false }) => {
  if (!animating) {
    return;
  }
  return (
    <View style={styles.loaderBox}>
      <ActivityIndicatorMolecules />
    </View>
  );
};

export default Loader;
