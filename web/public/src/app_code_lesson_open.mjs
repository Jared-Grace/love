import { app_code_lesson_add } from "../../../love/public/src/app_code_lesson_add.mjs";
export async function app_code_lesson_open(fn_base_name) {
  return await app_code_lesson_add(fn_base_name);
}
