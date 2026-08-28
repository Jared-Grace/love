import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { app_code_expression_choose_line_draw_on_operator } from "./app_code_expression_choose_line_draw_on_operator.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_paint } from "./app_code_expression_paint.mjs";
export function app_code_expression_choose_line_draw_step(
  stepped_from,
  current,
  on_wrong,
  line,
  on_chosen,
  on_finished,
  on_change,
  solved,
  value,
) {
  arguments_assert(arguments, 9);
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
  return {
    pressable,
    step,
  };
}
