import { app_code_quiz_index_get } from "./app_code_quiz_index_get.mjs";
import { app_code_quiz_index_set } from "./app_code_quiz_index_set.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { integer_random } from "./integer_random.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { mod } from "./mod.mjs";
export function app_code_quiz_index_shuffle(context, quizzes) {
  "advance to a DIFFERENT quiz kind so kinds never repeat back-to-back, remembering the current kind so Back can return to it; with only one kind, stay put";
  let current = app_code_quiz_index_get(context);
  storage_local_set_context(context, "quiz_index_previous", current);
  let size = list_size(quizzes);
  let single = less_than(size, 2);
  if (single) {
    return;
  }
  let offset = integer_random(1, subtract(size, 1));
  let next = mod(add(current, offset), size);
  app_code_quiz_index_set(context, next);
}
