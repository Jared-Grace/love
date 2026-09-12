import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { app_code_parentheses_inside_before_outside } from "./app_code_parentheses_inside_before_outside.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_integer_division_intro(
  parent,
) {
  arguments_assert(arguments, 1);
  ("the one sentence that says what is different about this lesson, in a card of its own");
  ("It names the one thing that changed. On every line pressed so far the brackets were marks somebody had put round a part; here they belong to the name in front of them - they are part of how the rounding down is spelled, and they cannot be taken off it - and they still say which part goes first.");
  ("The half of the sentence about what brackets do is the half the lessons on brackets said, in their words, out of the one place that holds them. A learner who has just spent a lesson on that sentence should meet it again rather than meet its paraphrase.");
  ("The two halves are joined into one piece before they are handed over, because the pieces of a row are read as words, code, words, code all the way along, and the tail is words.");
  let floor_name = js_code_math_floor_name();
  let inside_first = app_code_parentheses_inside_before_outside("");
  let tail = text_combine(" itself, and whatever is inside them", inside_first);
  html_div_cycle_code(parent, [
    "Now the brackets belong to ",
    floor_name,
    tail,
  ]);
}
