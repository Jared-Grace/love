import { invoke_multiple_fn } from "../../../love/public/src/invoke_multiple_fn.mjs";
import { app_code_lessons_fns } from "../../../love/public/src/app_code_lessons_fns.mjs";
export function app_code_lessons() {
  let lessons = invoke_multiple_fn(app_code_lessons_fns);
  return lessons;
}
