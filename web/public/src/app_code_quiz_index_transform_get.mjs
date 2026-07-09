import { mod } from "../../../love/public/src/mod.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { app_code_quiz_index_get } from "../../../love/public/src/app_code_quiz_index_get.mjs";
export function app_code_quiz_index_transform_get(context, quizzes, transform) {
  let quiz_index = app_code_quiz_index_get(context);
  let a = transform(quiz_index);
  let size = list_size(quizzes);
  let index_new = mod(a, size);
  return index_new;
}
