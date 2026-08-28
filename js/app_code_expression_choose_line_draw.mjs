import { property_get } from "./property_get.mjs";
import { app_code_expression_choose_line_draw_on_operator } from "./app_code_expression_choose_line_draw_on_operator.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { app_code_expression_paint } from "./app_code_expression_paint.mjs";
export function app_code_expression_choose_line_draw(
  current,
  solved,
  value,
  line,
  on_wrong,
  on_chosen,
  on_finished,
  on_change,
) {
  arguments_assert(arguments, 8);
  html_clear(line);
  ("a line drawn after a step is drawn plain and takes its chips afterwards, in two stages; the first drawing of all takes them at once, because there is nothing behind it for anything to have moved from");
  ("Told apart by whether a step is behind this drawing, rather than by being asked. Whoever draws the line again after a press already has to say which operator went and what it came to, and a drawing with an operator behind it is exactly a drawing something could have moved from - so the two cannot fall out of step with each other.");
  let stepped_from = null_is(solved);
  let rising = not(stepped_from);
  let ready = app_code_expression_nodes_ready(current);
  ("one right press ends this drawing of the line, so every other operator in it stops answering the moment one of them is chosen - the working out is under way and a second press would start a second one on top of it");
  let r = app_code_expression_choose_line_draw_on_operator(
    rising,
    ready,
    on_wrong,
    line,
    on_chosen,
    current,
    on_finished,
    on_change,
  );
  let on_operator = property_get(r, "on_operator");
  let pressable = property_get(r, "pressable");
  app_code_expression_paint(line, current, on_operator);
  let step = {
    current,
    ready,
    solved,
    value,
  };
  on_change(step);
  ("the operators this drawing put up are handed back, because a drawing after a step leaves them plain and somebody has to put the chips on them");
  ("Handed back rather than kept in a name out here, because there is one of these lists per drawing and the drawing that made it is the only thing that knows it is finished with it.");
  return pressable;
}
