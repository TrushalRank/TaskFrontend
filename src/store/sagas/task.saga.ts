import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksFailure,
  createTaskRequest,
  createTaskSuccess,
  createTaskFailure,
  fetchTaskByIdRequest,
  fetchTaskByIdSuccess,
  fetchTaskByIdFailure,
  updateTaskRequest,
  updateTaskSuccess,
  updateTaskFailure,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskFailure,
} from "../slices/taskSlice";
import { showToast } from "@/src/utils/toastHelper";
import api from "@/src/api/api";
import { router } from "expo-router";

// ✅ **Fetch All Tasks**
function* fetchTasksSaga(action: any) {
  try {
    const response = yield call(api.get, `/tasks`);
    yield put(fetchTasksSuccess(response.data.tasks));
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message || "Failed to fetch tasks";
    yield put(fetchTasksFailure(errorMessage));
    showToast("error", "Error Fetching Tasks", errorMessage);
  }
}

// ✅ **Create Task**
function* createTaskSaga(action: any) {
  try {
    const response = yield call(api.post, `/tasks`, action.payload);
    router.back()
    yield put(createTaskSuccess(response.data.task));
    showToast("success", "Task Created", "New task added successfully.");
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message || "Failed to create task";
    yield put(createTaskFailure(errorMessage));
    showToast("error", "Error Creating Task", errorMessage);
  }
}

// ✅ **Fetch Task by ID**
function* fetchTaskByIdSaga(action: any) {
  try {
    const { taskId } = action.payload;
    console.log('taskId', taskId);
    
    const response = yield call(api.get, `/tasks/${taskId}`);
    console.log('taskId', response.data.task);
    yield put(fetchTaskByIdSuccess(response.data.task));
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message || "Failed to fetch task";
    yield put(fetchTaskByIdFailure(errorMessage));
    showToast("error", "Error Fetching Task", errorMessage);
  }
}

// ✅ **Update Task**
function* updateTaskSaga(action: any) {
  try {
    const { taskId, taskData } = action.payload;
    const response = yield call(api.put, `/tasks/${taskId}`, taskData);
    yield put(updateTaskSuccess(response.data.updatedTask));
    console.log('response.data.updatedTask', response.data.updatedTask);
    router.replace({
        pathname: "/task/details",
        params: {taskId: response.data.updatedTask._id},
      })
    showToast("success", "Task Updated", "Task updated successfully.");
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message || "Failed to update task";
    yield put(updateTaskFailure(errorMessage));
    showToast("error", "Error Updating Task", errorMessage);
  }
}

// ✅ **Delete Task**
function* deleteTaskSaga(action: any) {
  try {
    const { taskId } = action.payload;
    yield call(api.delete, `/tasks/${taskId}`);
    yield put(deleteTaskSuccess(taskId));
    router.back()
    showToast("success", "Task Deleted", "Task removed successfully.");
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message || "Failed to delete task";
    yield put(deleteTaskFailure(errorMessage));
    showToast("error", "Error Deleting Task", errorMessage);
  }
}

// ✅ **Watch for Actions**
export function* taskSaga() {
  yield takeLatest(fetchTasksRequest.type, fetchTasksSaga);
  yield takeLatest(createTaskRequest.type, createTaskSaga);
  yield takeLatest(fetchTaskByIdRequest.type, fetchTaskByIdSaga);
  yield takeLatest(updateTaskRequest.type, updateTaskSaga);
  yield takeLatest(deleteTaskRequest.type, deleteTaskSaga);
}
