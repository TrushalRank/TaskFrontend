import { useRouter } from "expo-router";
import { View, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import { styles } from "./home.style";
import { FAB, Text } from "react-native-paper";
import { Colors } from "@/src/theme/colors";
import Header from "@/src/components/molecules/header/header.molecules";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasksRequest } from "@/src/store/slices/taskSlice";
import Loader from "@/src/components/organisms/loader/loader.organisms";
import { RootState } from "@/src/store/store";

interface IItem {
  title: string;
  description: string;
}

export default function HomePage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { tasks, loading } = useSelector((state: RootState) => state.task);

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, []);

  const onDetials = (item: IItem) => {
    router.push({
      pathname: "/task/details",
      params: { taskId: item._id },
    });
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.container}>
        <Header title="Home" showBackButton={false} />
        <FlatList
          data={tasks}
          contentContainerStyle={styles.taskList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => onDetials(item)}
            >
              <View key={index} style={styles.taskCard}>
                <Text variant="bodyMedium" style={styles.taskTitle}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />

        <FAB
          icon="plus"
          style={styles.fabIcon}
          color={Colors.white}
          onPress={() => router.push("/task/create")}
        />
      </SafeAreaView>
      <Loader animating={loading} />
    </View>
  );
}
