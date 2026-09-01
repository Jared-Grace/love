import { property_get } from "./property_get.mjs";
import { app_code_expression_choose_line_draw_step } from "./app_code_expression_choose_line_draw_step.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { null_is } from "./null_is.mjs";
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
  let r = app_code_expression_choose_line_draw_step({
    stepped_from,
    current,
    on_wrong,
    line,
    on_chosen,
    on_finished,
    on_change,
    solved,
    value,
  });
  let step = property_get(r, "step");
  let pressable = property_get(r, "pressable");
  on_change(step);
  ("the operators this drawing put up are handed back, because a drawing after a step leaves them plain and somebody has to put the chips on them");
  ("Handed back rather than kept in a name out here, because there is one of these lists per drawing and the drawing that made it is the only thing that knows it is finished with it.");
  return pressable;
}
