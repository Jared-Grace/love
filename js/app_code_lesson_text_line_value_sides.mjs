import { list_size_equal } from "./list_size_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_text_operators_written } from "./app_code_lesson_text_operators_written.mjs";
import { app_code_lesson_value_words } from "./app_code_lesson_value_words.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
export function app_code_lesson_text_line_value_sides(text) {
  arguments_assert(arguments, 1);
  ("which end of a line of code a true or a false is written at - the left, the right, both, or neither.");
  ("The other half of the fault a person reading lesson eighty-nine reported. They said the telling explained false !== (3 === 3) while the question asked 2 !== 2 === false, and named two differences: the brackets, and that the false had moved to the other side. The brackets are read by the check standing beside this one; this is the side.");
  ("A value on the left is a different thing to read than a value on the right. Left, the learner meets the answer before the thing it answers and has to hold it while solving the rest; right, they solve first and meet the value last. A lesson that only ever shows one of the two has shown the learner one of the two reading orders.");
  ("One operator is enough for the question to exist, unlike the brackets, which need two before they change anything. false === 5 shows a value on the left as plainly as any longer line does, so counting it keeps the telling as wide as it truly is.");
  let written = app_code_lesson_text_operators_written(text);
  let none = list_size_equal(written, 0);
  if (none) {
    let r = [];
    return r;
  }
  let words = app_code_lesson_value_words();
  let found = [];
  for (let word of words) {
    let left = text_starts_with(text, word);
    if (left) {
      list_add_unique(found, "value_left");
    }
    let right = text_ends_with(text, word);
    if (right) {
      list_add_unique(found, "value_right");
    }
  }
  return found;
}
