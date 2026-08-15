import { app_code_expression_chosen_set } from "./app_code_expression_chosen_set.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { app_code_expression_operator_pressable } from "./app_code_expression_operator_pressable.mjs";
import { app_code_expression_paint } from "./app_code_expression_paint.mjs";
import { app_code_expression_replaced_set } from "./app_code_expression_replaced_set.mjs";
import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { sleep_success_color } from "./sleep_success_color.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export function app_code_expression_choose_line(
  parent,
  tree,
  on_change,
  on_wrong,
  on_chosen,
  on_finished,
) {
  arguments_assert(arguments, 6);
  ("a line of code whose operators are pressed one at a time until nothing is left but a value: every operator in it is pressable, pressing the one that may go next works it out and the line becomes the shorter one, and pressing one that may not is refused and stays refused");
  ("A right press is answered in three beats rather than one. The operator and both its sides turn green together, so what is about to go is seen whole; on_chosen is waited on, which is where the front page says what the green comes to and holds for a press of replace; then the green turns into its value where it stood and stays green for as long as any other success does, before the line is drawn again plain. A line that changed the instant it was pressed asked the learner to find what had moved.");
  ("The one place this behaviour lives. The lesson's front page and its quiz are the same thing to press - what the front page adds is that it SAYS what to press at each step, which it does from on_change rather than by being a second copy of the pressing.");
  ("Every operator is pressable on both, including the front page. A page that only offers the right one teaches nothing about the wrong one, and a learner who has never been allowed to pick the leftmost has never found out that the leftmost is not the rule.");
  let line = html_div(parent);
  html_style_code_dark(line);
  draw(tree, null, null);
  function draw(current, solved, value) {
    html_clear(line);
    let ready = app_code_expression_nodes_ready(current);
    ("one right press ends this drawing of the line, so every other operator in it stops answering the moment one of them is chosen - the working out is under way and a second press would start a second one on top of it");
    let chosen = false;
    function on_operator(node, span, node_span) {
      app_code_expression_operator_pressable(span);
      async function on_click() {
        if (chosen) {
          return;
        }
        let ready_is = list_includes(ready, node);
        if (not(ready_is)) {
          ("an operator still holding another one underneath it: refuse just this one and leave the rest of the line as it was, so the next press is a fresh choice rather than a forced one");
          app_code_lesson_quiz_wrong_set(span);
          html_style_set(span, "pointer-events", "none");
          on_wrong(node);
          return;
        }
        chosen = true;
        app_code_expression_chosen_set(node_span, span);
        let node_value = app_code_expression_solved(node, node);
        await on_chosen(node, node_value);
        app_code_expression_replaced_set(node_span, node_value);
        await sleep_success_color();
        let stepped = app_code_expression_solved(current, node);
        draw(stepped, node, node_value);
        let more = app_code_expression_node_is(stepped);
        if (more) {
          return;
        }
        await on_finished(stepped);
      }
      html_on_click(span, on_click);
    }
    app_code_expression_paint(line, current, on_operator);
    let step = {
      current,
      ready,
      solved,
      value,
    };
    on_change(step);
  }
}
