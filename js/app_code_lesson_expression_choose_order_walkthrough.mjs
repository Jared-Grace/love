import { app_code_expression_replace_await } from "./app_code_expression_replace_await.mjs";
import { app_code_expression_step_say } from "./app_code_expression_step_say.mjs";
import { app_code_expression_choose_say } from "./app_code_expression_choose_say.mjs";
import { html_remove_if_not_null } from "./html_remove_if_not_null.mjs";
import { app_code_lesson_expression_choose_order_intro } from "./app_code_lesson_expression_choose_order_intro.mjs";
import { app_code_lesson_expression_choose_order_wrong_say } from "./app_code_lesson_expression_choose_order_wrong_say.mjs";
import { app_code_expression_choose_line } from "./app_code_expression_choose_line.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_first } from "./html_div_first.mjs";
import { noop } from "./noop.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_animation_duration } from "./app_shared_animation_duration.mjs";
import { html_height_change_animate } from "./html_height_change_animate.mjs";
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
  let line_holder = html_div(parent);
  ("what the lesson is for is said of the very line the learner is about to press, so it stands inside the example rather than in a card of its own above it");
  ("It used to be said above the example, of a line built for the saying. That put two different lines of the same shape one under the other, and a learner comparing them for what had changed was reading a difference the lesson never meant to draw.");
  let head = html_div_first(card);
  let duration = app_shared_animation_duration();
  let intro = html_div(head);
  let note = html_div(head);
  let whole_line = app_code_expression_code(tree);
  let line_code = whole_line;
  let rule_line = app_code_lesson_expression_choose_order_intro(
    intro,
    whole_line,
  );
  function rule_line_retire() {
    "the rule goes as soon as it has been used: the learner has just done the thing it asked for, and a sentence still telling them to do it reads as another turn to take rather than as the one they have taken";
    html_remove_if_not_null(rule_line);
    rule_line = null;
  }
  async function head_said(change) {
    "say something new in the walkthrough, and let the walkthrough grow or shrink to fit it slowly rather than at once";
    "Every one of these presses changes how much there is to read above the line, and the line is what the learner is looking at. Changed at once, the line is somewhere else by the time they look back at it and they have to find it again; grown to slowly, it slides to its new place under their eyes and is never lost.";
    "The whole head moves, not the line, because the line is only one of the things standing under the words - the labels and the buttons are under them too, and a line sliding while everything around it jumped would read as the line coming loose from the page.";
    "The words themselves are hidden while the head is moving, and shown again once it has arrived, so nothing is read while anything is sliding.";
    let promise = await html_height_change_animate(
      head,
      note,
      change,
      duration,
    );
    return promise;
  }
  async function on_chosen(node, value) {
    "the press is answered in words before anything on the line moves: what the chosen operator comes to, and then a button to make the swap, so the replacement is something the learner does rather than something that happens to them";
    await app_code_expression_replace_await(
      note,
      node,
      value,
      rule_line_retire,
      head_said,
    );
  }
  function on_change(step) {
    "after every replacement, say what the line is now and what to choose next";
    let current = property_get(step, "current");
    ("kept as the line is drawn again, so a refused press can be answered about the line as it stands rather than about the one the lesson opened with");
    line_code = app_code_expression_code(current);
    let solved = property_get(step, "solved");
    let ready = property_get(step, "ready");
    if (null_is(solved)) {
      ("the opening words are simply there when the page arrives, with nothing slowed: nothing has been pressed yet, so there is no place the learner was looking that a change could take them away from");
      html_clear(note);
      app_code_expression_choose_say(note, ready, "So first, choose ");
      return;
    }
    function change() {
      app_code_expression_step_say(note, current, ready, line_code);
    }
    head_said(change);
  }
  function on_wrong_example(node) {
    "a press on an operator that cannot go yet: say why, and leave the rest of the line to be pressed";
    "Answered with the rule the head of the example stated, said again of the line being pressed. The refusal alone told a learner that this operator is not the one without ever telling them what decides which is - so the same press was left to be made again on the next line by the same reading that made it here.";
    function change() {
      app_code_lesson_expression_choose_order_wrong_say(note, node, line_code);
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
