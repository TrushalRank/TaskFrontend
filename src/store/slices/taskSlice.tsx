import { createSlice } from "@reduxjs/toolkit";

interface Task {
  _id: string;
  title: string;
  description: string;
}

interface TaskState {
  tasks: Task[];
  taskDetails: Task;
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  taskDetails: {
    title: "",
    description: "",
    _id: ""
  },
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    fetchTasksRequest: (state) => {
      state.loading = true;
    },
    fetchTasksSuccess: (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    },
    fetchTasksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createTaskRequest: (state) => {
      state.loading = true;
    },
    createTaskSuccess: (state, action) => {
      state.loading = false;
      state.tasks.push(action.payload);
    },
    createTaskFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    fetchTaskByIdRequest: (state) => {
      state.loading = true;
    },
    fetchTaskByIdSuccess: (state, action) => {
      state.loading = false;
      state.taskDetails = action.payload;
    },
    fetchTaskByIdFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateTaskRequest: (state) => {
      state.loading = true;
    },
    updateTaskSuccess: (state, action) => {
      state.loading = false;
      state.tasks = state.tasks.map((task) => task._id === action.payload._id ? action.payload : task);
    },
    updateTaskFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteTaskRequest: (state) => {
      state.loading = true;
    },
    deleteTaskSuccess: (state, action) => {
      state.loading = false;
      state.tasks = state.tasks.filter((task) => task._id != action.payload);
    },
    deleteTaskFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
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
} = taskSlice.actions;

export default taskSlice.reducer;
