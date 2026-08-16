import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
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
  ("the lesson's front page: the same two presses the quiz asks for, with the one new thing said above them - the part is chosen the way it was chosen before, and then what it comes to is chosen too");
  ("Said in two lines and no more. The lesson before this one walked the learner through a line a step at a time and said what every press had just done; all that is new here is that the value is asked for instead of given, so a whole walkthrough said again would be teaching what has already been taught.");
  ("Nothing is narrated as the line is pressed. The words above say what the two presses are before any of them is made, and after that the line and the buttons under it are the only things to read - which is what the quiz next door looks like too, so the front page is a rehearsal of it rather than a different screen.");
  ("A wrong press is answered by the line itself, in red, the same way it is in the quiz. Being stopped from getting it wrong is not this page's job.");
  let head = app_code_container_light_blue(parent);
  html_div_cycle_code(head, ["Choose the part to solve"]);
  html_div_cycle_code(head, ["Then choose what that part comes to"]);
  let line_holder = html_div(parent);
  let choices_holder = html_div(parent);
  let current = tree;
  function on_change(step) {
    "the line as it now stands is kept, because the wrong values offered for a part are worked out from the line the part is standing in";
    current = property_get(step, "current");
  }
  async function on_chosen(node, value, node_span) {
    "the press is answered by asking what the chosen part comes to, and nothing on the line moves until the right value is pressed";
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
