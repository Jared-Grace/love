import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_category_operators } from "./app_code_category_operators.mjs";
export function app_code_lesson_name_id_operators(word, paint) {
  arguments_assert(arguments, 2);
  ("A lesson of the operators category, found by one word and titled by the drawing handed in.");
  ("Every operators lesson ends the same four lines: put the one word into a list on its own, ask which category this is, and hand the list, the category and the drawing over together. Only the drawing differs, so only the drawing is asked for here.");
  ("The word is received on its own rather than as a list, because every caller has exactly one and each was writing the brackets itself.");
  ("What the drawing is has moved down a level: it was once a maker handing back a painter, and it is now the painter itself, with the category word written for it before it is asked for anything.");
  let rights = [word];
  let left = app_code_category_operators();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
