import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_lesson_quiz_multiple_choice_add_decoy(
  decoy,
  seen,
  distractors,
) {
  arguments_assert(arguments, 3);
  let decoy_text = text_to(decoy);
  let dup = list_includes(seen, decoy_text);
  if (not(dup)) {
    list_add(seen, decoy_text);
    list_add(distractors, decoy_text);
  }
}
