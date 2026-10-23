import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_value_code } from "./js_value_code.mjs";
import { integer_is } from "./integer_is.mjs";
import { equal } from "./equal.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function app_code_program_step_solved_already_words(line_text, action) {
  arguments_assert(arguments, 2);
  ("why a line's value needs no solving, said with the value itself, words and code taking turns: the value, then that it is already solved, then the same line written with a sum, which would need solving first. action is the one holding the value: an assign or a log. 2026-10-23, at the human's asking, whose words were: 9 is already a solved value so no solving is needed - if the line was let a = 8 + 1;, then we would need to solve 8 + 1 to 9 first. Not picked: This is already a single value, as it was, which made the learner work out what this was");
  let value = property_get(action, "value");
  let said = js_value_code(value);
  let parts = ["", said, " is already a solved value, so no solving is needed"];
  ("the line with a sum is shown only for a whole number, which is split as one less plus 1; a string or true or false has no sum this course has taught yet");
  let b = integer_is(value);
  if (not(b)) {
    return parts;
  }
  let value2 = subtract(value, 1);
  let sum = js_value_code(value2) + " + 1";
  let line_sum = "console.log(" + sum + ");";
  let left = property_get(action, "kind");
  if (equal(left, "assign")) {
    let name = property_get(action, "name");
    line_sum = name + " = " + sum + ";";
    if (text_starts_with(line_text, "let ")) {
      line_sum = "let " + line_sum;
    }
  }
  parts = [
    "",
    said,
    " is already a solved value, so no solving is needed. If the line were ",
    line_sum,
    ", then ",
    sum,
    " would need solving to ",
    said,
    " first",
  ];
  return parts;
}
