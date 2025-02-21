import { Stack } from 'expo-router';

export default function TaskLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="create" options={{ title: "Create Task" }} />
      <Stack.Screen name="details" options={{ title: "Task Details" }} />
    </Stack>
  );
}
