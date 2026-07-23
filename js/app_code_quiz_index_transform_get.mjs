import { mod } from "./mod.mjs";
import { list_size } from "./list_size.mjs";
import { app_code_quiz_index_get } from "./app_code_quiz_index_get.mjs";
export function app_code_quiz_index_transform_get(context, quizzes, transform) {
  let quiz_index = app_code_quiz_index_get(context);
  let a = transform(quiz_index);
  let index_new = list_get_wrap_index(quizzes, a);
  return index_new;
}
