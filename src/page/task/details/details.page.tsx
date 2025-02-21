import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { Colors } from "@/src/theme/colors";
import { styles } from "./details.style";
import Header from "@/src/components/molecules/header/header.molecules";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteTaskRequest,
  fetchTaskByIdRequest,
} from "@/src/store/slices/taskSlice";
import { useIsFocused } from "@react-navigation/native";
import { RootState } from "@/src/store/store";
import { IParams } from "./details.type";
import Loader from "@/src/components/organisms/loader/loader.organisms";

export default function TaskDetail() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isFocus = useIsFocused();
  const { taskId }: IParams = useLocalSearchParams();
  const { title, description, _id } = useSelector(
    (state: RootState) => state.task.taskDetails
  );
  const { loading } = useSelector((state: RootState) => state.task);

  useEffect(() => {
    dispatch(fetchTaskByIdRequest({ taskId } as never));
  }, [isFocus]);

  const onDeleteTask = () => {
    dispatch(deleteTaskRequest({ taskId } as never));
  };

  const onEditTask = () => {
    router.push({
      pathname: "/task/create",
      params: { title, description, _id },
    });
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.container}>
        <Header title="Detail" />
        <View style={styles.taskDetailView}>
          <View style={styles.btnAdd}>
            <Button
              mode="contained"
              icon="delete"
              buttonColor={Colors.shadowPurple}
              onPress={onDeleteTask}
            >
              Delete
            </Button>
            <Button
              mode="contained"
              icon="pencil"
              buttonColor={Colors.shadowPurple}
              onPress={onEditTask}
            >
              Edit
            </Button>
          </View>
          <View style={styles.detailCard}>
            <View style={styles.p10}>
              <View style={styles.titleView}>
                <Text variant="titleMedium" style={styles.textColor}>
                  Title:
                </Text>
                <Text variant="bodyLarge">{title}</Text>
              </View>
              <Text variant="titleMedium" style={styles.textColor}>
                Description:
              </Text>
              <Text variant="bodyLarge">{description}</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <Loader animating={loading} />
    </View>
  );
}
