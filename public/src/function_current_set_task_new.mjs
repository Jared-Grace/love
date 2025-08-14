export async function function_current_set_task_new() {
  await function_current_set();
  await task_new();
}
