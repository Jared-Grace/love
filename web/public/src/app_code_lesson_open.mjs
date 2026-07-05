import { function_open } from "../../../love/public/src/function_open.mjs";
import { app_code_lesson_add } from "../../../love/public/src/app_code_lesson_add.mjs";
export async function app_code_lesson_open(fn_base_name) {
  let r = await app_code_lesson_add(fn_base_name);
  await function_open(f_name);
  return r;
}
