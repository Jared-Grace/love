import { app_code_lessons_fns } from "../../love/js/app_code_lessons_fns.mjs";
import { function_copy_list_add } from "../../love/js/function_copy_list_add.mjs";
export async function app_code_lesson_add(fn_base_name) {
  let fns_list = app_code_lessons_fns;
  let name_new = await function_copy_list_add(fn_base_name, fns_list);
  return name_new;
}
