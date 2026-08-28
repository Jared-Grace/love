import { app_code_expression_choose_line_draw } from "./app_code_expression_choose_line_draw.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
export function app_code_expression_choose_line(
  parent,
  tree,
  on_change,
  on_wrong,
  on_chosen,
  on_finished,
) {
  arguments_assert(arguments, 6);
  ("a line of code whose operators are pressed one at a time until nothing is left but a value: every operator in it is pressable, pressing the one that may go next works it out and the line becomes the shorter one, and pressing one that may not is refused until the one that may go is pressed");
  ("A right press is answered in three stages rather than one. The operator and both its sides turn blue together, so what is about to go is seen whole; on_chosen is waited on, which is where the front page says what the blue comes to and holds for a press of replace; then the blue turns into its value where it stood and stays blue for as long as any other success does, before the line is drawn again plain. A line that changed the instant it was pressed asked the learner to find what had moved.");
  ("The one place this behaviour lives. The lesson's front page and its quiz are the same thing to press - what the front page adds is that it SAYS what to press at each step, which it does from on_change rather than by being a second copy of the pressing.");
  ("Every operator is pressable on both, including the front page. A page that only offers the right one teaches nothing about the wrong one, and a learner who has never been allowed to pick the leftmost has never found out that the leftmost is not the rule.");
  let line = html_div(parent);
  html_style_code_dark(line);
  app_code_expression_choose_line_draw(
    tree,
    null,
    null,
    line,
    on_wrong,
    on_chosen,
    on_finished,
    on_change,
  );
}
