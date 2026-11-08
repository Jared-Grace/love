import { list_get_wrap_index } from "./list_get_wrap_index.mjs";
import { app_learn_js_quiz_index_get } from "./app_learn_js_quiz_index_get.mjs";
export function app_learn_js_quiz_index_transform_get(
  context,
  quizzes,
  transform,
) {
  let quiz_index = app_learn_js_quiz_index_get(context);
  let a = transform(quiz_index);
  let index_new = list_get_wrap_index(quizzes, a);
  return index_new;
}
