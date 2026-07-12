import { function_open } from "./function_open.mjs";
import { app_code_lesson_add } from "./app_code_lesson_add.mjs";
export async function app_code_lesson_add_open(fn_base_name) {
  let name_new = await app_code_lesson_add(fn_base_name);
  await function_open(name_new);
  return name_new;
}
