import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_prose_true_code_ast_split } from "./app_learn_js_lesson_prose_true_code_ast_split.mjs";
import { function_transform } from "./function_transform.mjs";
export async function app_learn_js_lesson_prose_true_code_function_repair(
  f_name,
) {
  arguments_assert(arguments, 1);
  ("Write every true and false in one function's lesson writing as code, and hand back how many were split out there.");
  let split = 0;
  function lambda$ast(ast) {
    split = app_learn_js_lesson_prose_true_code_ast_split(ast);
  }
  await function_transform(f_name, lambda$ast);
  return split;
}
