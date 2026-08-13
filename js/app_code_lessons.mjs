import { invoke_multiple_fn } from "./invoke_multiple_fn.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
export function app_code_lessons() {
  "Every lesson the code app teaches, in the order they are learned - each entry is one lesson function invoked to hand back what it holds, so adding a lesson is adding a name to the list next door rather than editing anything here.";
  let lessons = invoke_multiple_fn(app_code_lessons_fns);
  return lessons;
}
