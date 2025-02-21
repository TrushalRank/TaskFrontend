import { View } from "react-native";
import React, { FC } from "react";
import { styles } from "./header.style";
import { Text, IconButton } from "react-native-paper";
import { useRouter } from "expo-router";

interface IHeaderProps {
  showBackButton?: boolean;
  title: string;
}

const Header: FC<IHeaderProps> = ({ showBackButton = true, title }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {showBackButton && (
          <IconButton
            icon="arrow-left"
            size={24}
            onPress={() => router.back()}
            style={styles.backButton}
          />
        )}
        <Text variant="titleLarge" style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
