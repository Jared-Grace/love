import { app_code_button_replace_text } from "./app_code_button_replace_text.mjs";
import { app_code_expression_choose_line } from "./app_code_expression_choose_line.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { app_shared_encouragement_exclamation } from "./app_shared_encouragement_exclamation.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div_first } from "./html_div_first.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { noop } from "./noop.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { promise_wrap } from "./promise_wrap.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
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
  async function on_chosen(node, value) {
    "the press is answered in words before anything on the line moves: what the chosen operator comes to, and then a button to make the swap, so the replacement is something the learner does rather than something that happens to them";
    "Said with === rather than becomes, because that is how the track has written what a line comes to since the very first lesson that printed an answer, and the learner is looking at the green block the same words are about.";
    html_clear(note);
    let solved_code = app_code_expression_code(node);
    let value_text = text_to(value);
    let equals = js_operator_triple_equal_symbol();
    let worked_out = text_combine_multiple([
      solved_code,
      " ",
      equals,
      " ",
      value_text,
    ]);
    ("praised in the same words the quiz praises a finished question with, taken from the one list both of them read");
    let praise = app_shared_encouragement_exclamation();
    html_div_cycle_code(note, [
      praise,
      worked_out,
      ", so we replace the ",
      solved_code,
      " with ",
      value_text,
    ]);
    let label = app_code_button_replace_text();
    let asked = text_combine_multiple(["Click [", label, "] to replace the "]);
    html_div_cycle_code(note, [asked, solved_code, " with ", value_text]);
    let holder = html_div(note);
    function lambda$resolve(resolve) {
      app_shared_button_green(holder, label, resolve);
    }
    await promise_wrap(lambda$resolve);
  }
  function on_change(step) {
    "after every replacement, say what the line is now and what to choose next";
    html_clear(note);
    let solved = property_get(step, "solved");
    let ready = property_get(step, "ready");
    if (null_is(solved)) {
      say_choose(ready, "So first, choose ");
      return;
    }
    let current = property_get(step, "current");
    let more = app_code_expression_node_is(current);
    if (not(more)) {
      ("the line is finished, so the walkthrough ends with the very thing the quiz shows when a question is finished");
      ("Nothing is said about going on. The learner has just chosen every operator in the line for themselves - the walkthrough only named which one, the pressing was already theirs - so a parting line handing them their turn takes back what they just did, and the button underneath is the only thing that has to say where the turn is.");
      app_shared_success_message(note);
      return;
    }
    let current_code = app_code_expression_code(current);
    html_div_cycle_code(note, ["So now we have ", current_code]);
    say_choose(ready, "Now, choose ");
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
    on_chosen,
    noop,
  );
}
