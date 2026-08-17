import { html_text_set } from "./html_text_set.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { html_clear } from "./html_clear.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_label_solve_first } from "./app_code_label_solve_first.mjs";
import { app_code_label_solve_next } from "./app_code_label_solve_next.mjs";
import { app_code_label_solve_choice } from "./app_code_label_solve_choice.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div } from "./html_div.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_value_decoys } from "./app_code_expression_value_decoys.mjs";
import { app_code_expression_value_choose_await } from "./app_code_expression_value_choose_await.mjs";
import { noop } from "./noop.mjs";
import { app_code_expression_choose_line } from "./app_code_expression_choose_line.mjs";
export function app_code_lesson_expression_choose_order_solve_example(
  parent,
  tree,
) {
  arguments_assert(arguments, 2);
  ("the lesson's front page: the same two presses the quiz asks for, with what to do NOW said above them - the part is chosen the way it was chosen before, and then what it comes to is chosen too");
  ("One asking at a time, and always the one for the press that is wanted right now. Both of them standing together is a plan to hold in the head before starting; one at a time, each is only ever about the press being made, and the words arrive as the learner reaches them rather than having to be remembered from the top of the screen.");
  ("The words are the quiz's own three askings, out of the same three functions the quiz sets its label from. The front page IS the quiz with nothing counted against you, so a second wording of the same three instructions would be two sets of words to keep in step, and the screen next door would be asking in words the learner had never been shown.");
  ("Nothing else is narrated. The lesson before this one walked the learner through a line a step at a time and said what every press had just done; all that is new here is that the value is asked for instead of given, so a whole walkthrough said again would be teaching what has already been taught.");
  ("The asking goes when the line is down to a value, because there is nothing left to press and an instruction still standing there would be asking for a press that cannot be made.");
  ("A wrong press is answered by the line itself, in red, the same way it is in the quiz. Being stopped from getting it wrong is not this page's job.");
  let head = app_code_container_light_blue(parent);
  let asking = html_div(head);
  let line_holder = html_div(parent);
  let choices_holder = html_div(parent);
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
      html_clear(asking);
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
