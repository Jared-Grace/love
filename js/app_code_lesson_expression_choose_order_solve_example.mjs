import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { html_div_first } from "./html_div_first.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_label_solve_first } from "./app_code_label_solve_first.mjs";
import { app_code_label_solve_next } from "./app_code_label_solve_next.mjs";
import { app_code_label_solve_choice } from "./app_code_label_solve_choice.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_value_decoys } from "./app_code_expression_value_decoys.mjs";
import { app_code_expression_value_choose_await } from "./app_code_expression_value_choose_await.mjs";
import { noop } from "./noop.mjs";
import { app_code_expression_choose_line } from "./app_code_expression_choose_line.mjs";
export function app_code_lesson_expression_choose_order_solve_example(
  parent,
  card,
  tree,
) {
  arguments_assert(arguments, 3);
  ("the lesson's front page: the same two presses the quiz asks for, with what the lesson is for said above them and then what to do NOW - the operator is chosen the way it was chosen before, and then what it comes to is chosen too");
  ("Laid out exactly as the walkthrough of the lesson before it: the words at the top of the card above the Code label, and the line to press underneath. The two screens are one screen with one thing changed, so a learner arriving at the second finds every part of it where they left it, and the one difference is the only thing they have to find.");
  ("What the lesson is FOR is said above the card and not here, so nothing on the card is about a line other than the one on it. All the card holds is the asking and the line it is asking about.");
  ("Nothing stands in a box of its own. The lesson before says all of its words as plain lines at the top of the card, and a box drawn around the same words here would read as a different kind of saying rather than as the same saying carried on.");
  ("One asking at a time, and always the one for the press that is wanted right now. Both of them standing together is a plan to hold in the head before starting; one at a time, each is only ever about the press being made, and the words arrive as the learner reaches them rather than having to be remembered from the top of the screen.");
  ("The words are the quiz's own three askings, out of the same three functions the quiz sets its label from. The front page IS the quiz with nothing counted against you, so a second wording of the same three instructions would be two sets of words to keep in step, and the screen next door would be asking in words the learner had never been shown.");
  ("The asking goes when the line is down to a value, because there is nothing left to press and an instruction still standing there would be asking for a press that cannot be made. What was said ABOVE it stays, because it is what the lesson is for rather than what to do next.");
  ("A wrong press is answered by the line itself, in red, the same way it is in the quiz. Being stopped from getting it wrong is not this page's job.");
  let line_holder = html_div(parent);
  let choices_holder = html_div(parent);
  let head = html_div_first(card);
  let asking = html_div(head);
  let current = tree;
  function ask(words) {
    "the one place the asking is written, so the three askings take turns in it instead of standing beside each other";
    html_text_set(asking, words);
  }
  function on_change(step) {
    "the line as it now stands is kept, because the wrong values offered for a part are worked out from the line the part is standing in";
    current = property_get(step, "current");
    let more = app_code_expression_node_is(current);
    if (not(more)) {
      ("the line is finished, so where the asking stood the learner is told well done - in the very words and the very green the walkthrough of the lesson before ends in, and the quiz ends every question in, out of the one place all three of them read");
      ("It replaces the asking rather than standing under it, because the asking was the only thing on the card that was ever about what to do next, and there is nothing to do next.");
      html_clear(asking);
      app_shared_success_message(asking);
      return;
    }
    let solved = property_get(step, "solved");
    let first_is = null_is(solved);
    if (first_is) {
      let opening = app_code_label_solve_first();
      ask(opening);
      return;
    }
    let next = app_code_label_solve_next();
    ask(next);
  }
  async function on_chosen(node, value, node_span) {
    "the press is answered by asking what the chosen part comes to, and nothing on the line moves until the right value is pressed";
    let said = app_code_label_solve_choice();
    ask(said);
    let decoys = app_code_expression_value_decoys(current, node);
    await app_code_expression_value_choose_await(
      choices_holder,
      value,
      decoys,
      noop,
    );
  }
  app_code_expression_choose_line(
    line_holder,
    tree,
    on_change,
    noop,
    on_chosen,
    noop,
  );
}
