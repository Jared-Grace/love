import { app_code_lesson_expression_choose_order_walkthrough_on_chosen } from "./app_code_lesson_expression_choose_order_walkthrough_on_chosen.mjs";
import { app_code_head_spaced_above_code } from "./app_code_head_spaced_above_code.mjs";
import { app_code_expression_step_say } from "./app_code_expression_step_say.mjs";
import { app_code_expression_choose_say } from "./app_code_expression_choose_say.mjs";
import { app_code_lesson_expression_choose_order_wrong_say } from "./app_code_lesson_expression_choose_order_wrong_say.mjs";
import { app_code_expression_choose_line } from "./app_code_expression_choose_line.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { noop } from "./noop.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_choose_order_walkthrough(
  parent,
  card,
  tree,
) {
  arguments_assert(arguments, 3);
  ("the lesson's front page: the same line to press as the quiz, and above it a walkthrough saying what to press at each step and what the press just did");
  ("Every operator is pressable here too, so a learner may take the leftmost and be told why it cannot go yet. Being told the answer and being stopped from getting it wrong are not the same lesson, and only the first one is this page's job.");
  ("Pressing changes nothing that is kept, so leaving the page and coming back starts the line over, and a learner who wants the walkthrough again just takes it again.");
  ("The walkthrough stands at the TOP of the card, above the Code label, because it is an instruction and an instruction is read before the thing it is about; underneath the line it was a caption on something already pressed.");
  let { line_holder, head, note, line_code, ready_now, head_said, on_chosen } =
    app_code_lesson_expression_choose_order_walkthrough_on_chosen(
      parent,
      card,
      tree,
    );
  function on_change(step) {
    "after every replacement, say what the line is now and what to choose next";
    let current = property_get(step, "current");
    ("kept as the line is drawn again, so a refused press can be answered about the line as it stands rather than about the one the lesson opened with");
    line_code = app_code_expression_code(current);
    let solved = property_get(step, "solved");
    let ready = property_get(step, "ready");
    ready_now = ready;
    if (null_is(solved)) {
      ("the opening words are simply there when the page arrives, with nothing slowed: nothing has been pressed yet, so there is no place the learner was looking that a change could take them away from");
      html_clear(note);
      app_code_expression_choose_say(note, ready, "So first, choose ");
      return;
    }
    function change() {
      "the room above the Code label comes back, because what stands there now is a line to read again rather than the button that had given it up";
      app_code_head_spaced_above_code(head);
      app_code_expression_step_say(note, current, ready, line_code);
    }
    head_said(change);
  }
  function on_wrong_example(node) {
    "a press on an operator that cannot go yet: say why, and leave the rest of the line to be pressed";
    "Answered with the rule the head of the example stated, said again of the line being pressed. The refusal alone told a learner that this operator is not the one without ever telling them what decides which is - so the same press was left to be made again on the next line by the same reading that made it here.";
    function change() {
      app_code_head_spaced_above_code(head);
      app_code_lesson_expression_choose_order_wrong_say(
        note,
        node,
        ready_now,
        line_code,
      );
    }
    head_said(change);
  }
  app_code_expression_choose_line(
    line_holder,
    tree,
    on_change,
    on_wrong_example,
    on_chosen,
    noop,
  );
}
