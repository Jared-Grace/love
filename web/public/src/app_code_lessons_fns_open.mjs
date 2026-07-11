import { function_open } from "../../../love/public/src/function_open.mjs";
import { app_code_lessons_fns } from "../../../love/public/src/app_code_lessons_fns.mjs";
export async function app_code_lessons_fns_open() {
  let fns = app_code_lessons_fns();
  await function_open(f_name);
  return fns;
}
