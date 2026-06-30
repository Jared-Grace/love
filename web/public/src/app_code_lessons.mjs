import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { app_code_lessons_fns } from "../../../love/public/src/app_code_lessons_fns.mjs";
export function app_code_lessons() {
  let lessons_fns = app_code_lessons_fns();
  let lessons = invoke_multiple(lessons_fns);
  return lessons;
}
