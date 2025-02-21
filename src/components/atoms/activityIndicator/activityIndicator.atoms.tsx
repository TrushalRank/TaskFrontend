import React from "react";
import { ActivityIndicator as Loader, MD2Colors } from "react-native-paper";

const ActivityIndicator = () => {
  return <Loader animating={true} color={MD2Colors.red800} />;
};

export default ActivityIndicator;
