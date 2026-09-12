import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_whole_part_intro(
  parent,
) {
  arguments_assert(arguments, 1);
  ("the one sentence that says what is different about this lesson, in a card of its own");
  ("It names the one thing that changed. The rounded division pressed on the screen before this one now has a times standing after it, and the times is the last thing on the line to happen even though there is nothing in front of it but the brackets - which is the reading a learner has to make before any of it can be pressed.");
  ("★ IT USED TO SAY THAT THE BRACKETS BELONG TO Math.floor, AND THAT SENTENCE HAS MOVED UP A LESSON. A screen for pressing integer division apart on its own now stands in front of this one, so the brackets are no longer new here and the card would have been telling a learner that something they had just spent a screen on had only now arrived. The sentence itself was not rewritten, it was renamed after the lesson it is now the news of.");
  let times = js_operator_asterisk_symbol();
  html_div_cycle_code(parent, [
    "Now the ",
    times,
    " is written after the brackets and happens last, because it waits until what is in front of it is one number",
  ]);
}
