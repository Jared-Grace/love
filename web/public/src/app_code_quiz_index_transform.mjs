import { app_code_quiz_index_set } from "../../../love/public/src/app_code_quiz_index_set.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { app_code_quiz_index_get } from "../../../love/public/src/app_code_quiz_index_get.mjs";
export function app_code_quiz_index_transform(context, quizzes, transform) {
  let quiz_index = app_code_quiz_index_get(context);
  let a1 = transform(quiz_index);
  let size = list_size(quizzes);
  let index_new = mod(a1, size);
  app_code_quiz_index_set(context, index_new);
  return quiz_index;
}
