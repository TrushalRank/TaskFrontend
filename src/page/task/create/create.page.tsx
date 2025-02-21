import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Colors } from "@/src/theme/colors";
import { styles } from "./create.style";
import { useState } from "react";
import Header from "@/src/components/molecules/header/header.molecules";
import { useDispatch, useSelector } from "react-redux";
import {
  createTaskRequest,
  updateTaskRequest,
} from "@/src/store/slices/taskSlice";
import Loader from "@/src/components/organisms/loader/loader.organisms";
import { RootState } from "@/src/store/store";
import { IParams } from "./create.type";

export default function CreateTask() {
  const dispatch = useDispatch();
  const { title, description, _id }: IParams = useLocalSearchParams();
  const { loading } = useSelector((state: RootState) => state.task);

  const isEditing = !!title;
  const [taskTitle, setTaskTitle] = useState<string>(title || "");
  const [taskDescription, setTaskDescription] = useState<string>(
    description || ""
  );

  const onCreate = () => {
    if (!!_id) {
      console.log("_id", _id);

      dispatch(
        updateTaskRequest({
          taskId: _id,
          taskData: { title: taskTitle, description: taskDescription },
        } as never)
      );
    } else {
      dispatch(
        createTaskRequest({
          title: taskTitle,
          description: taskDescription,
        } as never)
      );
    }
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.container}>
        <Header title="Add Task" />
        <View style={styles.taskDetailView}>
          <TextInput
            label="Title"
            mode="outlined"
            value={taskTitle}
            onChangeText={setTaskTitle}
            outlineColor="transparent"
            activeOutlineColor="grey"
          />
          <TextInput
            label="Description"
            mode="outlined"
            value={taskDescription}
            onChangeText={setTaskDescription}
            multiline
            outlineColor="transparent"
            activeOutlineColor="grey"
          />
          <View style={styles.btnAdd}>
            <Button
              mode="contained"
              buttonColor={Colors.shadowPurple}
              onPress={onCreate}
            >
              {isEditing ? "Save" : "Add"}
            </Button>
          </View>
        </View>
      </SafeAreaView>
      <Loader animating={loading} />
    </View>
  );
}
