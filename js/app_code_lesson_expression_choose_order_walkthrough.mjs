import { app_code_expression_choose_line } from "./app_code_expression_choose_line.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_shared_encouragement_exclamation } from "./app_shared_encouragement_exclamation.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div_first } from "./html_div_first.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { noop } from "./noop.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_to } from "./text_to.mjs";
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
  let note = html_div_first(card);
  function say_choose(ready, lead) {
    "name the one operator that may go next, so the walkthrough tells rather than asks";
    let symbol = list_first_property(ready, "operator");
    html_div_cycle_code(note, [lead, symbol]);
  }
  function on_change(step) {
    "after every press, say what that press did and what to press next";
    html_clear(note);
    let solved = property_get(step, "solved");
    let ready = property_get(step, "ready");
    if (null_is(solved)) {
      say_choose(ready, "First, choose the ");
      return;
    }
    let value = property_get(step, "value");
    let solved_code = app_code_expression_code(solved);
    let value_text = text_to(value);
    ("praised in the same words the quiz praises a finished question with, taken from the one list both of them read");
    let praise = app_shared_encouragement_exclamation();
    let lead = text_combine(praise, "the ");
    html_div_cycle_code(note, [lead, solved_code, " becomes ", value_text]);
    let current = property_get(step, "current");
    let more = app_code_expression_node_is(current);
    if (not(more)) {
      ("the line is finished, so the walkthrough ends with the very thing the quiz shows when a question is finished");
      ("Nothing is said about going on. The learner has just chosen three times over - the walkthrough only named which operator, the choosing was already theirs - so a parting line handing them their turn takes back what they just did, and the button underneath is the only thing that has to say where the turn is.");
      app_shared_success_message(note);
      return;
    }
    let current_code = app_code_expression_code(current);
    html_div_cycle_code(note, ["So now we have ", current_code]);
    say_choose(ready, "Now, choose the ");
  }
  function on_wrong_example(node) {
    "a press on an operator that cannot go yet: say why, and leave the rest of the line to be pressed";
    "Said as an order of turns rather than as a shape - an operator sitting on one SIDE of another is a thing a learner can only see by picturing the line as a tree, and no lesson has drawn one. Which operator has to go first is a question the line itself answers.";
    let symbol = property_get(node, "operator");
    html_div_cycle_code(note, [
      "Not yet - the ",
      symbol,
      " cannot be chosen because another operator must be chosen first",
    ]);
  }
  app_code_expression_choose_line(
    line_holder,
    tree,
    on_change,
    on_wrong_example,
    noop,
  );
}
