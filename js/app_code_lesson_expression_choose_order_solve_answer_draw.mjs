import { text_empty } from "./text_empty.mjs";
import { app_code_expression_choose_order_ask } from "./app_code_expression_choose_order_ask.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_choose_order_solve_answer_draw(
  parent,
  tree,
  on_success,
  on_wrong,
  answer_label_set,
  decoys_get,
) {
  arguments_assert(arguments, 6);
  ("the quiz of a solve-each-step lesson: the same line to press as the front page, and after every press the values it could come to");
  ("The pressing itself is the front page's pressing, out of the one place both of them read. The two screens are one screen with one thing counted, so the asking a learner is answered with here is the very asking they were shown next door - and the label over the answers is where this screen puts it.");
  ("Which wrong values are offered is the one thing the lessons on this engine differ by, so it is handed in. A line of numbers and a line of comparisons are pressed the same way and answered the same way; what a learner could plausibly press INSTEAD is the only place the two part company, and writing the pressing out again for each of them would leave one lesson's habits to be repaired in two files.");
  ("the label is told to say nothing once the line is down to a value, because there is nothing left to press and an instruction still standing there would be asking for a press that cannot be made - it is told to say NOTHING rather than told a well done, because this screen answers a finished line with its own success message and a second well done in the label would be the same thing said twice");
  function finished() {
    "the asking stops, and the words it stopped saying keep their room on the screen so nothing under them moves as the success message arrives";
    let nothing = text_empty();
    answer_label_set(nothing);
  }
  app_code_expression_choose_order_ask(
    parent,
    tree,
    answer_label_set,
    finished,
    decoys_get,
    on_wrong,
    on_success,
  );
}
