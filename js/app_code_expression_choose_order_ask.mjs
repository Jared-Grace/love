import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_label_solve_first } from "./app_code_label_solve_first.mjs";
import { app_code_label_solve_next } from "./app_code_label_solve_next.mjs";
import { app_code_label_solve_choice } from "./app_code_label_solve_choice.mjs";
import { app_code_expression_value_choose_await } from "./app_code_expression_value_choose_await.mjs";
import { app_code_expression_choose_line } from "./app_code_expression_choose_line.mjs";
export function app_code_expression_choose_order_ask(
  parent,
  tree,
  say,
  finished,
  decoys_get,
  on_wrong,
  on_success,
) {
  arguments_assert(arguments, 7);
  ("press the operators of one line in the order they solve in, with what to do next said out loud after every press - the whole of it, for the lesson's front page and for its quiz alike");
  ("The two screens are one screen with one thing counted. Where the words are put is the only thing they differ by, so it is handed in as a place to say things rather than written twice: the front page writes them on the card, the quiz writes them over its answers. Everything else - the line, the values under it, which of the three askings is due, what a wrong press does - was written out once here.");
  ("The line and the values stand in two places set aside before either is drawn, so the buttons are always UNDER the line - built as they are needed they would land wherever the line had left off.");
  ("The asking changes twice a step and says so: choose what to solve, then what it comes to, then what to solve next. The first step asks for the FIRST rather than the next, because a learner who has pressed nothing has nothing for a next to come after.");
  ("The line as it now stands is kept, because the wrong values offered for a part are worked out from the line that part is standing in.");
  ("There is no asking left once the line is down to a value, so what happens then is handed in too. An instruction still standing there would be asking for a press that cannot be made.");
  let line_holder = html_div(parent);
  let choices_holder = html_div(parent);
  let current = tree;
  async function on_change(step) {
    current = property_get(step, "current");
    let more = app_code_expression_node_is(current);
    if (not(more)) {
      await finished();
      return;
    }
    let solved = property_get(step, "solved");
    let first_is = null_is(solved);
    if (first_is) {
      let opening = app_code_label_solve_first();
      say(opening);
      return;
    }
    let next = app_code_label_solve_next();
    say(next);
  }
  async function on_chosen(node, value, node_span_unused, waiting_on) {
    "the press is answered by asking what the chosen part comes to, and nothing on the line moves until the right value is pressed";
    "the values are named as the thing being waited on, so a learner who goes on pressing the line is shown where the asking moved to rather than being answered with nothing";
    let said = app_code_label_solve_choice();
    say(said);
    waiting_on(choices_holder);
    let decoys = decoys_get(current, node);
    await app_code_expression_value_choose_await(
      choices_holder,
      value,
      decoys,
      on_wrong,
    );
  }
  app_code_expression_choose_line(
    line_holder,
    tree,
    on_change,
    on_wrong,
    on_chosen,
    on_success,
  );
}
