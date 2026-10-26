import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_flat_tree_of_code } from "./app_code_expression_flat_tree_of_code.mjs";
import { app_code_expression_press_steps } from "./app_code_expression_press_steps.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { catch_null } from "./catch_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { text_to } from "./text_to.mjs";
import { list_last } from "./list_last.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_expression_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner picks a wrong value for a line of code: the line worked out one operator at a time, down to the value it comes to, as parts that take turns between words and code. null when the question is not a line that can be worked out, or when the working does not land on the right answer, so a quiz asking something else about the line is told nothing rather than something beside the point");
  ("2026-10-26, at the human's asking: the whole working rather than its first step. Not picked: the first step only, which keeps the learner working but says the answer itself on a line with one operator, and most of these lines have one; a sentence per operator, which would have to be written for each one. The choice pressed is not read: every wrong value is answered by the same working, because the working is what was missed");
  function steps_get() {
    let tree = app_code_expression_flat_tree_of_code(question);
    let steps = app_code_expression_press_steps(tree);
    let codes = list_map(steps, app_code_expression_code);
    return codes;
  }
  let codes = catch_null(steps_get);
  if (null_is(codes)) {
    return null;
  }
  let size = list_size(codes);
  let operator_none = less_than(size, 2);
  if (operator_none) {
    return null;
  }
  let input = list_last(codes);
  let last = text_to(input);
  let right = text_to(answer);
  let lands = equal(last, right);
  if (not(lands)) {
    return null;
  }
  let parts = ["Remember: work it out one step at a time: "];
  function step_add(code, index) {
    let b = equal(index, 0);
    if (not(b)) {
      list_add(parts, " becomes ");
    }
    list_add(parts, code);
  }
  each_index(codes, step_add);
  return parts;
}
