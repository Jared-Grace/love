import { app_code_expression_replace_say } from "./app_code_expression_replace_say.mjs";
import { app_code_lesson_suppose_solve_line } from "./app_code_lesson_suppose_solve_line.mjs";
import { app_code_lesson_expression_choose_order_rule_parts } from "./app_code_lesson_expression_choose_order_rule_parts.mjs";
import { app_shared_button_green_font_inherit } from "./app_shared_button_green_font_inherit.mjs";
import { app_code_expression_choose_line } from "./app_code_expression_choose_line.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
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
import { promise_wrap } from "./promise_wrap.mjs";
import { property_get } from "./property_get.mjs";
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
  ("what the lesson is for is said of the very line the learner is about to press, so it stands inside the example rather than in a card of its own above it");
  ("It used to be said above the example, of a line built for the saying. That put two different lines of the same shape one under the other, and a learner comparing them for what had changed was reading a difference the lesson never meant to draw.");
  let head = html_div_first(card);
  let intro = html_div(head);
  let note = html_div(head);
  let whole_line = app_code_expression_code(tree);
  let line_code = whole_line;
  app_code_lesson_suppose_solve_line(intro, "Suppose", whole_line);
  html_div_cycle_code(intro, [
    "Eventually we will teach you to solve this all at once",
  ]);
  html_div_cycle_code(intro, [
    "But, for now, we will teach you to solve this step-by-step",
  ]);
  let rule = app_code_lesson_expression_choose_order_rule_parts(
    "In ",
    whole_line,
  );
  html_div_cycle_code(intro, rule);
  function say_choose(ready, lead) {
    "name the one operator that may go next, so the walkthrough tells rather than asks";
    let symbol = list_first_property(ready, "operator");
    html_div_cycle_code(note, [lead, symbol]);
  }
  async function on_chosen(node, value) {
    "the press is answered in words before anything on the line moves: what the chosen operator comes to, and then a button to make the swap, so the replacement is something the learner does rather than something that happens to them";
    html_clear(note);
    let solved_code = app_code_expression_code(node);
    let value_text = text_to(value);
    app_code_expression_replace_say(note, solved_code, value_text);
    ("the line above has already said WHAT is being swapped for what and WHY it comes to that, so the button is left with the one thing still to be decided - when to let it happen");
    ("Short on purpose. A button repeating the pieces the sentence above it just named would be the same sentence twice, and the learner would read it twice to find out it says nothing new.");
    let asked = "Click here to replace";
    let holder = html_div(note);
    function lambda$resolve(resolve) {
      app_shared_button_green_font_inherit(holder, asked, resolve);
    }
    await promise_wrap(lambda$resolve);
  }
  function on_change(step) {
    "after every replacement, say what the line is now and what to choose next";
    html_clear(note);
    let current = property_get(step, "current");
    ("kept as the line is drawn again, so a refused press can be answered about the line as it stands rather than about the one the lesson opened with");
    line_code = app_code_expression_code(current);
    let solved = property_get(step, "solved");
    let ready = property_get(step, "ready");
    if (null_is(solved)) {
      say_choose(ready, "So first, choose ");
      return;
    }
    let more = app_code_expression_node_is(current);
    if (not(more)) {
      ("the line is finished, so the walkthrough ends with the very thing the quiz shows when a question is finished");
      ("Nothing is said about going on. The learner has just chosen every operator in the line for themselves - the walkthrough only named which one, the pressing was already theirs - so a parting line handing them their turn takes back what they just did, and the button underneath is the only thing that has to say where the turn is.");
      app_shared_success_message(note);
      return;
    }
    html_div_cycle_code(note, ["So now we have ", line_code]);
    say_choose(ready, "Now, choose ");
  }
  function on_wrong_example(node) {
    "a press on an operator that cannot go yet: say why, and leave the rest of the line to be pressed";
    "Answered with the rule the head of the example stated, said again of the line being pressed. The refusal alone told a learner that this operator is not the one without ever telling them what decides which is - so the same press was left to be made again on the next line by the same reading that made it here.";
    let symbol = property_get(node, "operator");
    html_div_cycle_code(note, ["Not yet - the ", symbol, " cannot go first"]);
    let parts = app_code_lesson_expression_choose_order_rule_parts(
      "Remember: In ",
      line_code,
    );
    html_div_cycle_code(note, parts);
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
